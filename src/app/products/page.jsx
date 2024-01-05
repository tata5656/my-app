import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/component/button/Button';


const Data = async ()=>{
    const result = await fetch('https://fakestoreapi.com/products');
    if (!result.ok){
        throw new Error('there is some problem');

    }

    return result.json();
};

async function Products() {
    const products = await Data();

  return (
  <main className={styles.main}>
    <h1 className={styles.title}>დაათვალიერე!</h1>
    <div className={styles.container}>
        {products.map((pro)=>(
            <div className={styles.card}>
            
            <div className={styles.imgcontainer}>
                <Image
                src={pro.image}
                alt='image'
                width={220}
                height={220}
                className={styles.image}
                />
            </div>
            <div className={styles.textcontainer}>
                <h1 className={styles.text}>{pro.title}</h1>
                <h5>price:{pro.price}</h5>
              <p className={styles.p}>
                  {pro.description}
                </p>
               
                <div>
                
             </div>
            </div>  
            
           </div>
           
        ))}
        
    </div>
    <div className={styles.textbox}>
      <h1 className={styles.title}>არ დაგავიწყდეს !</h1>
      <br/>
      <span className={styles.test}>თუ მოგწონს ჩვენი გვერდი და გსურთ მეტი შეიტყოთ და ნახოთ ყველა სიახლე აუცილებლად დარეგისტრირდით და გახდით ჩვენი გუნდის წევრი.
     </span>
      <p className={styles.underpara}>გადადი შემდეგ გვერდზე და შეავსე ანკეტა</p>
     <Button title={"რეგისტრაცია"} url={"/joinus/register"}/>
  </div>
    </main>
  )
}

export default Products