const reactJSX = (
          <div>
            <h1 className="head">React Project</h1>
            <p>Skills used to make this project</p>
            <ol>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
            </ol>
          </div>
        );
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(reactJSX);