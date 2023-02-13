import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        测试标题
      </header>
      <section>
        这里是中间的内容
      </section>
      <footer>
        <div>
          这里是底部的输入框
        </div>
        <dl>
          <dt>测试1</dt>
          <dd>
            <input type="text" placeholder="输入框" />
          </dd>
        </dl>
        <dl>
          <dt>测试1</dt>
          <dd>
            <input type="text" placeholder="输入框" />
          </dd>
        </dl>
        <dl>
          <dt>测试1</dt>
          <dd>
            <input type="text" placeholder="输入框" />
          </dd>
        </dl>
      </footer>
    </div>
  );
}

export default App;
