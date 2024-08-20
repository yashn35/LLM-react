import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="/_next/static/css/8b9c555bde09c256.css"
    data-precedence="next"
  />
  <link
    rel="preload"
    as="script"
    fetchpriority="low"
    href="/_next/static/chunks/webpack-0d99cc9d247b0495.js"
  />
  <title>Cartesia</title>
  <meta
    name="description"
    content="Cartesia is building next-gen foundation models using new subquadratic architectures pioneered by our team at Stanford and CMU."
  />
  <link
    rel="icon"
    href="/icon.png?4999b88bf26c576a"
    type="image/png"
    sizes="1600x1600"
  />
  <meta name="next-size-adjust" />
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
            Speak
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
    <div
      role="alert"
      className="relative rounded-md w-full border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-950 dark:border-gray-800 dark:[&>svg]:text-gray-50 border-gray-800 bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-50 sm:hidden"
    >
      <h5 className="mb-1 font-medium leading-none tracking-tight">
        Looks like you're using a mobile device
      </h5>
      <div className="text-sm [&_p]:leading-relaxed">
        Don't forget to unmute the ringer!
      </div>
    </div>
  </div>
  <div className="pb-28">
    <hr className="mb-8" />
    <div className="container max-w-screen-md mx-auto px-4 md:px-8">
      <div>
        <div className="flex flex-col gap-5">
          <form className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <fieldset className="grid gap-2">
                  <button
                    className="inline-flex items-center text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 h-9 rounded-md px-3 justify-between overflow-hidden whitespace-nowrap w-[225px] max-sm:w-[150px]"
                    role="combobox"
                    aria-expanded="false"
                    type="button"
                    aria-haspopup="dialog"
                    aria-controls="radix-:Raafnmvaja:"
                    data-state="closed"
                  >
                    <p className="flex-1 overflow-hidden text-left overflow-ellipsis">
                      <span className="flex gap-1.5 items-center">
                        Sonic English
                      </span>
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevrons-up-down ml-2 h-4 w-4 shrink-0 opacity-50"
                    >
                      <path d="m7 15 5 5 5-5" />
                      <path d="m7 9 5-5 5 5" />
                    </svg>
                  </button>
                </fieldset>
              </div>
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
                  defaultValue={""}
                />
              </div>
              <div className="flex p-2 self-end">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-primary text-gray-50 hover:bg-primary/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 h-8 rounded-md px-3 gap-2"
                  type="submit"
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
              <div className="flex flex-col items-start gap-2">
                <div className="flex gap-2 max-sm:flex-col">
                  <button
                    className="inline-flex items-center text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 h-9 rounded-md px-3 justify-between overflow-hidden whitespace-nowrap w-[250px] max-sm:w-[150px]"
                    role="combobox"
                    aria-expanded="false"
                    type="button"
                    aria-haspopup="dialog"
                    aria-controls="radix-:Rasafnmvaja:"
                    data-state="closed"
                  >
                    <p className="flex-1 overflow-hidden text-left overflow-ellipsis">
                      Pick a voice
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevrons-up-down ml-2 h-4 w-4 shrink-0 opacity-50"
                    >
                      <path d="m7 15 5 5 5-5" />
                      <path d="m7 9 5-5 5 5" />
                    </svg>
                  </button>
                  <div className="flex gap-2 items-center">
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 h-9 rounded-md px-3"
                      type="button"
                      data-state="closed"
                    >
                      <span className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-blend size-4"
                        >
                          <circle cx={9} cy={9} r={7} />
                          <circle cx={15} cy={15} r={7} />
                        </svg>
                        Mix
                      </span>
                    </button>
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 h-9 rounded-md px-3"
                      type="button"
                      data-state="closed"
                    >
                      <span className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-sliders-horizontal size-4"
                        >
                          <line x1={21} x2={14} y1={4} y2={4} />
                          <line x1={10} x2={3} y1={4} y2={4} />
                          <line x1={21} x2={12} y1={12} y2={12} />
                          <line x1={8} x2={3} y1={12} y2={12} />
                          <line x1={21} x2={16} y1={20} y2={20} />
                          <line x1={12} x2={3} y1={20} y2={20} />
                          <line x1={14} x2={14} y1={2} y2={6} />
                          <line x1={8} x2={8} y1={10} y2={14} />
                          <line x1={16} x2={16} y1={18} y2={22} />
                        </svg>
                        Speed &amp; Emotion
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <hr className="my-8" />
    <div className="container max-w-screen-md mx-auto px-4 md:px-8">

    </div>
  </div>
</>
  );
}

export default App;
