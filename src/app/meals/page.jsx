import Meals from '@/Components/Meals';
import styles from'./styles.module.css'

export const metadata = {
  title: {
    absolute:"Meals"
  },
  description: "search your meals",
  keywords:["hot meals","meals","your-meals"]
};

const page = () => {
    return (
        <div>
             <h1 className={styles.text_tomato}>Choose your Meals</h1>
             <p>Choose meals of your choice by searching.....</p>
           <Meals></Meals>
        </div>
    );
};

export default page;