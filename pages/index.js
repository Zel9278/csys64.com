import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"

function GetAge(data) {
    let splitData = data.split("/")
    let birthday = new Date(splitData[0], splitData[1] - 1, splitData[2])
    let today = new Date()
    let thisYearBirthday = new Date(
        today.getFullYear(),
        birthday.getMonth(),
        birthday.getDate()
    )
    let age = today.getFullYear() - birthday.getFullYear()

    return today < thisYearBirthday ? age - 1 : age
}

function Ptd(props) {
    return (
        <td>
            <h1>{props.name}</h1>
            <p>{props.value}</p>
        </td>
    )
}

function Lli(props) {
    return (
        <li>
            <Link href={props.url} passHref>
                <a target="_blank" rel="noopener noreferrer">
                    {props.name}
                </a>
            </Link>
        </li>
    )
}

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta property="og:title" content="Main Page" />
                <meta property="og:url" content="https://csys64.com" />
                <meta property="og:image" content="/clive.png" />
                <meta property="og:type" content=" website" />
                <meta property="og:description" content="Clive's homepage." />
                <meta property="og:site_name" content="clive sys64" />
                <meta name="theme-color" content="#226611" />

                <title>csys64 - home</title>
                <link rel="icon" href="/logo.svg" />
                <meta name="author" content="clive.sys64" />
                <meta name="description" content="Clive's homepage." />
                <meta name="generator" content="VSCode" />
                <meta name="keywords" content="clive,csys64" />
            </Head>

            <div className="title">
                <h1>csys64 homepage</h1>
                <p>
                    <Link href="https://eox2.com" passHref>
                        <a target="_blank" rel="noopener noreferrer">
                            eoeo
                        </a>
                    </Link>
                    ~:3
                </p>
            </div>
            <div className="spacer" />
            <div className="content">
                <div className="about">
                    <h2>About</h2>
                    <img src="/logo.svg" alt="a logo" className="logo" />
                    <p>
                        色々な趣味を持っている、できることが少ない。
                        <br />I have many hobbies, but there is not much I can
                        do.
                    </p>
                </div>
                <div className="spacer" />
                <div className="profile">
                    <h2>Profile</h2>
                    <table>
                        <tbody>
                            <tr>
                                <Ptd name="Name" value="Clive(Ced)" />
                                <Ptd name="Age" value={GetAge("2003/04/25")} />
                                <Ptd name="Gender" value="Male" />
                                <Ptd name="Location" value="Japan, Aichi" />
                                <Ptd
                                    name="Interests"
                                    value="Development, MIDI, Music, Video, etc..."
                                />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="spacer" />
            <div className="skills">
                <h2>Programming Skills</h2>
                <ul>
                    <li id="nodejs">JavaScript(Node.js)</li>
                    <li id="ts">TypeScript</li>
                    <li id="cpp">C++</li>
                    <li id="cs">C#</li>
                    <li id="java">Java</li>
                    <li id="ss">ShellScript</li>
                </ul>
            </div>
            <div className="spacer" />
            <div className="links">
                <h2>Links</h2>
                <ul>
                    <Lli name="files" url="https://files.csys64.com" />
                    <Lli name="mpp" url="https://beta-mpp.csys64.com" />
                    <Lli name="kuso" url="https://kusoda.net" />
                </ul>
            </div>
            <div className="links">
                <h2>Other Links</h2>
                <ul>
                    <Lli name="discord" url="https://d.eox2.com" />
                    <Lli name="gh(ced)" url="https://github.com/Zel9278" />
                    <Lli name="twi(ced)" url="https://twitter.com/fuji_ced" />
                    <Lli
                        name="yt(ced)"
                        url="https://www.youtube.com/channel/UCsj-vSMzC6wru-8PQ8XXPhw"
                    />
                    <Lli
                        name="yt(zeria)"
                        url="https://www.youtube.com/channel/UCGtRbbt8uyT5aavE90lZJaA"
                    />
                </ul>
            </div>
            <div className="spacer" />
            <div className="footer">
                <p>© {new Date().getFullYear()} csys64</p>
            </div>
        </div>
    )
}
