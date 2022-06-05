import React from 'react'
import { render } from 'react-dom'

// 型定義
interface listType {
    title: string;
    id: string;
    skill: string[];
    exp: string;
    github: string;
};

// ワークリスト配列
let list : Array<listType> = [
    {title:"攻略サイト構築", id:"a001", skill:["jQuery", "vue.js", "React", "PHP"], exp:"海外スマホゲームの攻略サイト。\nデータベース、および育成シミュレーションシステムの構築・開発", github:"https://github.com/Leomal0404/HeroWarsLab"},
    {title:"Webゲーム制作", id:"a002", skill:["jQuery", "WebGL", "PHP"], exp:"PC/スマホブラウザ向けゲーム。\nWebGL(pixi.js)を用いたSPA型アプリケーションの開発", github:"https://github.com/Leomal0404/WebGameSource"},
    {title:"ポートフォリオページ", id:"a003", skill:["React", "PHP"], exp:"個人web制作ソースコードポートフォリオページ。", github:"https://github.com/Leomal0404/PortfolioPage"}
];

// コンポーネント
const App = () => {
    return (
        <div className="container">
            <div className="hero">
                <div className="hero-titleBox">
                    <strong>Yukio Nakamura Portfolio</strong>
                </div>                
                <div className="hero-movie">
                    <video autoPlay loop muted >
                        <source src="./assets/movies/hero.mp4" type="video/mp4" />
                    </video>
                </div>                
            </div>

            <div>
                {
                    list.map(({ title, id, skill, exp, github }) => {
                        let imgURL : string = './assets/images/'+ id +'.png';
                        let gitURL : string = github;

                        return (
                        <div className="work-container">
                            <div className="work-detail">
                                <div className="work-title">{title}</div>
                                <MultiLineBody body={exp} />                                
                                <div className="work-title">使用スキル</div>
                                <ul className="work-skillList bt">
                                {function() {
                                    let skills = []
                                    for (let i = 0; i<skill.length; i++){
                                        skills.push(<li>{skill[i]}</li>)
                                    }
                                    return skills
                                }()}
                                </ul>
                                <div className="work-title">ソースコード</div>
                                <p className="work-exp"><a href={gitURL}>github</a></p>
                            </div>
                            <div className="work-pcScreen">
                                <div className="work-pcScreenImage"><img src={imgURL} width="330" /></div>
                            </div>
                        </div>
                    )})
                }
            </div>

            <footer className="footer">
                <p>&copy; 2021-2022 Yukio Nakamura Portfolio</p>
            </footer>
        </div>
    )
}

// 改行コードの変換
const MultiLineBody = ({ body }: { body: string }) => {
    const texts = body.split('\n').map((item, index) => {
      return (
        <React.Fragment key={index}>
          {item}
          <br />
        </React.Fragment>
      );
    });
    return <p className="work-exp bt">{texts}</p>;
};

// レンダー
render(<App/>, document.querySelector('#app'))