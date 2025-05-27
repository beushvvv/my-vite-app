// src/components/TitleUpdater.jsx
import { useEffect } from 'react';

export default function TitleUpdater({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  
  return null;
}