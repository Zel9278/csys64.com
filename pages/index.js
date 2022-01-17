import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <h1>csys64 - clive&apos;s homepage</h1>
        <p><a href="https://www.eox2.com" target="_blank" rel="noopener noreferrer">eoeo</a>~:3</p>
      </div>
      <div className="spacer" />
      <div className="content">
        <div className="about">
          <h2>About</h2>
          <img
            src="/logo.svg"
            alt="a logo"
            className='logo'
          />
          <p>It's just a website.</p>
        </div>
        <div className="spacer" />
        <div className="profile">
          <h2>Profile</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <h1>Name</h1>
                  <p>Clive</p>
                </td>
                <td>
                  <h1>Age</h1>
                  <p>{getBirthday("2003/04/25")}</p>
                </td>
                <td>
                  <h1>Gender</h1>
                  <p>Male</p>
                </td>
                <td>
                  <h1>Location</h1>
                  <p>Japan, Aichi</p>
                </td>
                <td>
                  <h1>Interests</h1>
                  <p>Development, MIDI, Music, Video</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="spacer" />
      <div class="links">
        
      </div>
      <div className="spacer" />
      <div className="footer">
        <p>© {new Date().getFullYear()} csys64</p>
      </div>
    </div>
  )
}

function getBirthday(data) {
  let splitData = data.split("/");
  let birthday = new Date(splitData[0], splitData[1]-1, splitData[2]);
  let today = new Date();
  let thisYearBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  let age = today.getFullYear() - birthday.getFullYear();

  return (today < thisYearBirthday) ? age-1 : age;
}