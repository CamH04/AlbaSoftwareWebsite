import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const MarkdownArticle = () => {
  const { articleId } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const response = await fetch(`/articles/${articleId}`);
        const text = await response.text();
        setContent(text);
      } catch (err) {
        console.error('Error loading markdown file:', err);
        setContent('Error loading the article');
      }
    };

    loadMarkdown();
  }, [articleId]);

  return (
    <div className="article-content">
      <ReactMarkdown children={content} />
    </div>
  );
};

export default MarkdownArticle;
