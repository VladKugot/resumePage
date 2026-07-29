import { useEffect, useState } from "react";
import "./CoddingArea.scss";

export const CoddingArea = () => {
  const defaultCode = `const developer = {
  name: 'Vlad',
  role: 'Frontend Developer',
  skills: ['React', 'TypeScript', 'SCSS'],
  status: 'Ready to build' }

    console.log(\`Hi, I'm \${developer.name} - \${developer.role}!\`);
    console.log('Skills:', developer.skills.join(', '));`;

  const [code, setCode] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
  let currentIndex = 0;

  const timer = setInterval(() => {
    if (currentIndex < defaultCode.length) {
      const nextChar = defaultCode.charAt(currentIndex);
      setCode((prev) => prev + nextChar);
      currentIndex++;
    } else {
      clearInterval(timer);
      setIsTyping(false);
    }
  }, 55);

  return () => clearInterval(timer);
}, []);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isTyping) {
      setIsTyping(false);
    }
    setCode(e.target.value);
  };

  const runCode = () => {
    const logs: string[] = [];

    const customConsole = {
      log: (...args: any[]) => {
        logs.push(
          args
            .map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg),
            )
            .join(" "),
        );
      },
      error: (...args: any[]) => {
        logs.push(`❌ Error: ${args.join(" ")}`);
      },
    };

    try {
      const runFn = new Function("console", code);
      runFn(customConsole);
      setOutput(logs);
    } catch (err: any) {
      setOutput([`⚠️ Runtime Error: ${err.message}`]);
    }
  };
  return (
    <div className="codding-area">
      <div className="codding-area__top">
        <div className="codding-area__window-controls">
          <span className="dot dot--red"></span>
          <span className="dot dot--yellow"></span>
          <span className="dot dot--green"></span>
          <span className="codding-area__filename">developer.js</span>
        </div>
        <button className="codding-area__btn" onClick={runCode}>
          <span className="play-icon">▶</span> Run Code
        </button>
      </div>

      <textarea
        value={code}
        className="codding-area__textarea"
        rows={8}
        onChange={handleTextareaChange}
        spellCheck={false}
      />

      <div className="codding-area__bottom">
        <p className="codding-area__main-text">Console Output:</p>
        <div className="codding-area__console">
          {output.length === 0 ? (
            <span className="codding-area__placeholder">
              // Натисни "Run Code", щоб побачити результат...
            </span>
          ) : (
            output.map((line, idx) => (
              <pre className="codding-area__text" key={idx}>
                {line}
              </pre>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
