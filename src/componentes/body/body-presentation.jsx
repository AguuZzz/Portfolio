import { TypeAnimation } from 'react-type-animation';
import Wave from 'react-wavify'
export function BodyPres() {
    return (
        <>
        <div className="bodypres">
        <img className="imgBody" src="https://unavatar.io/github/AguuZzz"></img> 
            <div className='textanimation'>
                <TypeAnimation
            sequence={[
                `Hello world! i'm Agus,\n
                a Python 🐍 dev`,
                1000,
                `Hello world! i'm Agus,\n
                a React.js ⚛️ designer`,
                1000,
                `Hello world! i'm Agus,\n
                a Javascript 🟨 dev`,
                1000,
                `Hello world! i'm Agus,\n
                a Hacking 💻 student`,
                1000,
                `Hello world! i'm Agus,\n
                a Linux 🐧 user`,
                1000,
                `Hello world! i'm Agus,\n
                an AI 🤖🧠 lover`,
                1000,
                () => {},
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em', display: 'inline-block' }}
            />
            </div>
        </div>
        <Wave fill="url(#gradient)" style={{position: "relative", bottom: "-18px", display: 'flex'}}
        paused={false}
        options={{
          height: 1,
          amplitude: 35,
          speed: 0.15,
          points: 3
        }}>
              <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="10%" stopColor="#646464" />
      <stop offset="90%" stopColor="#4747472d" />
    </linearGradient>
  </defs>
        </Wave>
        </>
    );
};