import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const responseRef = useRef(null);

  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [responseText]);

  const generateResponse = async (fullText) => {
    setIsGenerating(true);
    const words = fullText.split(' ');
    let currentText = '';

    for (let i = 0; i < words.length; i++) {
      currentText += (i > 0 ? ' ' : '') + words[i];
      setResponseText(currentText);
      await new Promise(resolve => setTimeout(resolve, Math.random() * 100 + 50));
    }
    setIsGenerating(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() && !isGenerating) {
      setResponseText('');
      setTimeout(() => {
        // Hard coded but this can be changed to include an API call 
        generateResponse("Hi! I am Rene, a Large Language Model (LLM) made by Cartesia.ai. How can I assist you today?"); 
      }, 1000);
    }
  };

  return (
    <>
      {/* ... (previous meta tags and links) ... */}
      <div className="container max-w-screen-md mx-auto px-4 md:px-8 py-8">
      <nav className="flex-1 flex justify-between max-sm:flex-col max-sm:text-sm gap-4">
      <a href="/">
        <span className="font-bold tracking-tight text-2xl text-black">
          cartesia/ai
        </span>
      </a>
      <div className="flex gap-8">
        <ul className="flex gap-4 sm:gap-6">
          <a className="inline-flex items-center text-primary" href="/">
            Rene
          </a>
          <a className="inline-flex items-center" href="/console">
            Console
          </a>
          <a
            className="inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.cartesia.ai"
          >
            Docs
          </a>
          <a className="inline-flex items-center" href="/subscription">
            Subscription
          </a>
        </ul>
      </div>
    </nav>
      </div>
      <div className="container max-w-screen-md mx-auto px-4 md:px-8 grid gap-4 mb-8 sm:hidden sm:p-0">
        {/* ... (previous alert content) ... */}
      </div>
      <div className="pb-28">
        <hr className="mb-8" />
        <div className="container max-w-screen-md mx-auto px-4 md:px-8">
          <div>
            <div className="flex flex-col gap-5">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex items-center justify-between">
                  {/* ... (previous button content) ... */}
                </div>
                <div className="shadow border overflow-hidden rounded-md flex flex-col">
                  <div className="space-y-2">
                    <textarea
                      placeholder="Write something to say..."
                      className="resize-none flex min-h-[80px] p-4 w-full text-sm placeholder:text-gray-500"
                      name="transcript"
                      id=":R1bafnmvaja:-form-item"
                      aria-describedby=":R1bafnmvaja:-form-item-description"
                      aria-invalid="false"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    />
                  </div>
                  <div className="flex p-2 self-end">
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary text-gray-50 hover:bg-primary/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 h-8 rounded-md px-3 gap-2"
                      type="submit"
                      disabled={isGenerating}
                    >
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                      Generate Text
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  {/* ... (previous voice selection buttons) ... */}
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="container max-w-screen-md mx-auto px-4 md:px-8">
          {responseText && (
            <div 
              ref={responseRef}
              className="p-4 rounded-lg bg-gray-100 mt-4"
            >
              {responseText}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;