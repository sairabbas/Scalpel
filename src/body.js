import Home from './components/pages/Home'
import BestBuyPage from './components/pages/BestBuyPage'
import AmazonForm from './components/pages/AmazonPage'
import WalmartPage from './components/pages/WalmartPage'
import HowToPage from './components/pages/HowToPage'
import AboutUsPage from './components/pages/AboutUsPage'

import db from "./firebase/firebase"
import GetProduct from "./api/product";
import {useEffect} from "react";
//-----------Nintendo Switch,---3070,---------3080,---------3090,---------Xbox,------PlayStation
//const asin = ["B07VGRJDFY", 'B097MYTZMW', 'B08V1ZWGVR', 'B08HR6ZBYJ', 'B08H75RTZ8', 'B08FC5L3RG'];


const Body = ({bStock, bBB, bAma, bWal, bHow, bAbout}) => {
    // UNCOMMENT TO UPDATE ITEM DATA
    /*
    const getData = async () => {
        try {
            const map = new Map();
            const results = await GetProduct('B08V1ZWGVR');
            var docData = {
                title: results.title,
                image: results.images[0],
                asin: results.asin,
                full_link: results.full_link,
                prices: results.prices,
                out_of_stock: results.out_of_stock,
                ship_info: results.ship_info
            };
            // Update firebase data
            db.firestore().collection("items").doc("3080").set(docData).then(() => {
                console.log("Document successfully written!");
            });
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => getData(), []);
     */

    return (
        <div className='body'>
            {bStock && <Home/>}
            {bBB && <BestBuyPage/>}
            {bAma && <AmazonForm/>}
            {bWal && <WalmartPage/>}
            {bHow && <HowToPage/>}
            {bAbout && <AboutUsPage/>}
        </div>
    )
}

export default Body;


/*
   // store data into map, then store into state
   const getData = async () => {
       try {
           const map = new Map();
           const results = await GetProduct("B08H75RTZ8");

           var docData = {
               title: results.title,
               image: results.images[0],
               asin: results.asin,
               full_link: results.full_link,
               prices: results.prices,
               out_of_stock: results.out_of_stock,
               ship_info: results.ship_info
           };


           setData(items);

           // Update firebase data
           db.firestore().collection("items").doc("XboxSeriesX").set(docData).then(() => {
               console.log("Document successfully written!");
           });


       } catch (err) {console.log(err);}
       */

/*
db.firestore().collection("items").doc("PlayStation5").set(docData).then(() => {
    console.log("Document successfully written!");
});

 */

//useEffect(() => getData(), []);

/*
db.firestore().collection("items").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
    })
})

 */
