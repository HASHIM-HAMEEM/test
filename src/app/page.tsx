import Image from 'next/image';
import Head from 'next/head';  // Add this import statement
// import styles from 'your-styles-file.module.css'; // Make sure to replace with your actual styles file

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Quran App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        <div className='header'>
          <h1>Surah Al-Baqarah</h1>
          <p>Ayat: 142</p>
          <button>Continue Reading</button>
        </div>

        <div className='grid'>
          {['The Quran', 'Promises of Allah', 'Prayer Times', 'Duas', 'Explore By Topic', 'Qibla', 'Favourites'].map(item => (
            <button key={item} className='card'>
              {item}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

