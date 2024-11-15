'use client';

import { useState, useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeViewerProps {
  filePath: string;
}

const CodeViewer = ({ filePath }: CodeViewerProps) => {
  const [code, setCode] = useState<string>('Loading...');
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasVerticalOverflow, setHasVerticalOverflow] = useState(false);
  const [hasHorizontalOverflow, setHasHorizontalOverflow] = useState(false);
  const codeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const cleanPath = filePath.replace(/^\/?(scripts\/)?/, '');
        const response = await fetch(`/api/episode-files?path=${encodeURIComponent(cleanPath)}`);
        
        if (!response.ok) {
          throw new Error('Failed to load file');
        }
        
        const data = await response.json();
        setCode(data.content || 'No content available');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error loading file');
        setCode('Error loading file content');
      }
    };

    fetchCode();
  }, [filePath]);

  // Check for overflow after content loads or window resizes
  useEffect(() => {
    const checkOverflow = () => {
      if (codeContainerRef.current) {
        const { scrollHeight, clientHeight, scrollWidth, clientWidth } = codeContainerRef.current;
        setHasVerticalOverflow(scrollHeight > clientHeight);
        setHasHorizontalOverflow(scrollWidth > clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [code]);

  if (error) {
    return (
      <div className="bg-red-900/20 rounded-lg p-4 text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div 
        ref={codeContainerRef}
        className={`
          overflow-auto
          transition-all duration-300
          ${isExpanded ? 'max-h-full' : 'max-h-96'}
          ${hasHorizontalOverflow ? 'overflow-x-auto' : 'overflow-x-hidden'}
        `}
        style={{
          maxWidth: '100%'
        }}
      >
        <SyntaxHighlighter
          language="typescript"
          style={vscDarkPlus}
          className="rounded-lg text-sm !bg-gray-900/50 min-w-full"
          customStyle={{
            padding: '1.5rem',
            margin: 0,
            background: 'transparent'
          }}
          wrapLongLines={false}
          showLineNumbers={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      
      {!isExpanded && hasVerticalOverflow && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none" />
      )}

      <div className="flex gap-4 mt-4">
        {hasVerticalOverflow && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CodeViewer; 