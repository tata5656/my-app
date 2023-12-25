import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import christmas from '/public/christmas.jpg'



function Page() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.imgcontainer}>
        <Image src={christmas} alt='christmas' className={styles.image} />
      </div>
      <div className={styles.title}>ახალი წელი</div>
      <section className={styles.textsection}>
       
  
          <p className={styles.para}>
            ახალი წელი მთელს მსოფლიოში განსაკუთრებული დღესასწაულია. ძირითადად, ხალხი დეკემბრის მიწურულს
             იწყებს მზადებას ახალი წლის შესახვედრად: ნაძვის ხის ლამაზი სათამაშოებით მორთვა, ფერად-ფერადი
              განათებები, საახალწლო წვიმები, მაშხალები, ბავშვები წითელ-თეთრ სამოსში გამოწყობილ თოვლის ბაბუას
               ელოდებიან, მშობლები საჩუქრებს ფუთავენ. დღეს ეს ყველაფერი გვიქმნის საახალწლო განწყობას, თუმცა არც ისე დიდი ხანია, რაც თანამედროვე საახალწლო ტრადიციები დამკვიდრდა,
             რაშიც მნიშვნელოვანი როლი მიუძღვის ამერიკული კულტურის გავრცელებას ევროპასა და დანარჩენ მსოფლიოში. ასე რომ, შობა-ახალი წლის აღსანიშნავი დღევანდელი ტრადიციების უმეტესობა 
            ბოლო ორი საუკუნის განმავლობაში ამერიკული კულტურის დიდი გავლენით წარმოიშვა. მანამდე კი ევროპის ქვეყნებშიც კი განსხვავებული ტრადიციები არსებობდა ახალი წლის აღსანიშნავად.
           </p>
    
        

          <p className={styles.para}>
          საქართველოში საახალწლო ტრადიციები საკმაოდ დიდი ხნის წინ
           დამკვიდრდა და მას შემდეგ მუდმივად ვითარდებოდა. ჩვენთან 
           ახალი წელი სხვადასხვა ეპოქაში წელიწადის სხვადასხვა დროს
            აღინიშნებოდა. შემონახული ცნობების თანახმად, IV სუკუნეში
             ახალ წელს 6 აგვისტოს ზეიმობდნენ. VII საუკუნიდან აგვისტოს 
             სექტემბერი ჩაენაცვლა. IX საუკუნის 20-იანი წლებიდან ახალი წლის ათვლა გაზაფხულის პირველი თვიდან 
             –მარტიდან იწყება. იანვარში კი ახალი წლის აღნიშვნა ჯერ კიდევ X საუკუნეში დაიწყო, თუმცა, საბოლოოდ,
              XIV საუკუნეში დამკვიდრდა. სწორედ ამ პერიოდში დაიხვეწა უამრავი საახალწლო წეს-ჩვეულება და რიტუალი
          </p>

        
      </section>
    </div>
  )
}

export default Page
