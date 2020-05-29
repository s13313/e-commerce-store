import Head from 'next/head';
import Link from 'next/link';
import { getProduct } from '../db.js';
import Header from '../components/Header';
import Header_2 from '../components/Header_2';
import Footer from '../components/Footer';

const uniSexItems = getProduct();

export default function uniSex() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="title">
          <div className="row">
            <p>hey there, I'm</p>
            <h1 style={{ fontSize: '70px' }}>COUNT SHIRTY</h1>
          </div>
          <div className="row_2">
            <h4 style={{ marginRight: '-100px' }}>
              from the moment you put me on,
            </h4>
            <h3 style={{ margin: '30px 0' }}> you'll feel light and cool!</h3>
          </div>
        </div>
        <img className="coverImage" src="/TSHIRTS.jpeg" />
        <Header_2 />
        <h1 className="title">T-Shirt for uniSex</h1>

        <section className="section">
          <div className="products">
            {uniSexItems
              .filter((type) => type.type === 'uniSex')
              .map((items) => {
                return (
                  <Link href="/products/[items]" as={'/products/' + items.id}>
                    <a>
                      <div>
                        <img className="image" src={items.image} />

                        <div className=" productInfos">
                          <div>My name is: {items.name}</div>
                          <div>
                            I am availabe in{' '}
                            {items.size.map((size) => {
                              return size + '.';
                            })}
                          </div>
                          <div>I am {items.color}</div>
                          <div>My price is: €{items.price}</div>
                          <div className="buttonSection">
                            <button className="orderButton">Add to Cart</button>
                            <button className="orderButton">
                              Pruduct Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                );
              })}
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .container {
          margin: 0;
        }
        .title {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .row {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 50%;
          text-align: center;
          height: 20vh;
          margin-top: 40px;
        }
        .row_2 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
        }
        .coverImage {
          margin: 20px 0;
          width: 100%;
        }
        .section {
          max-width: 100%;
          overflow: hidden;
          margin: 40px;
          display: flex;
          flex-direction: column;
          align-content: center;

          height: 100%;
        }
        .products {
          display: flex;
          flex-wrap: wrap;
          height: 100%;
          justify-content: space-around;
        }
        .productInfos {
          margin: 10px 0 0 10px;
          display: grid;
          justify-content: start;
          height: 100%;
          height: 100%;
        }
        .productInfos * + * {
          margin-top: 10px;
        }

        .image {
          width: 400px;
          height: auto;
          position: relative;
          z-index: 1;
          margin-bottom: 1em;
          margin-top: 2em;
          overflow: hidden;
        }
        .image :hover {
          transition: 300ms;
          transform: scale(1.05);
        }
        .image_2 {
          margin: 10px 40px 0 0;
          width: 300px;
          height: auto;
          z-index: 2;
        }
        .buttonSection {
          text-align: center;
        }
        .buttonSection * + * {
          margin: 10px;
        }
        .orderButton {
          margin-top: 40px;
          background: none;
          color: black;
          border: none;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.15em;
          text-align: center;
          display: inline-block;
          position: relative;
          width: 170px;
          height: 70px;
          border: 1px solid #c8d8d4cd;
        }
        .orderButton :hover {
          transition: 400ms;
          color: #fff;
          cursor: pointer;
          background-color: rgb(77, 141, 198);
        }
        a {
          color: black;
          text-decoration: none;
          letter-spacing: 0.15em;
          padding: 10px 0;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          display: block;
          max-width: 100%;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        h1 {
          margin: 0;
          letter-spacing: 3px;
          padding: 0;
          font-size: 45px;
          font-weight: 300;
          text-transform: uppercase;
        }
        h2 {
          margin: 0;
          padding: 0;
          font-size: 40px;
          font-weight: 300;
          letter-spacing: 2px;
        }
        h3 {
          margin: 0;
          padding: 0;
          font-size: 30px;
          font-weight: 300;
          letter-spacing: 2px;
        }
        h4 {
          margin: 0;
          padding: 0;
          font-size: 26px;
          font-weight: 300;
          letter-spacing: 2px;
        }
        p {
          margin: 4px;
          padding: 0;
          font-size: 16px;
          font-weight: 300;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
}
