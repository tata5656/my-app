"use client";
import React, { useEffect, useState } from "react";
import styles from './page.module.css'

function Delete() {
  const Delete = async () => {
    try {

      const res = await fetch(`https://jsonplaceholder.typicode.com/users/3`, {
        method: "DELETE",
      });

      const deletedPost = await res.json();
      console.log(deletedPost);
      
    } catch (error) {
      console.log("there is a problem");
    }
  };

  return (
    <div>
      <button onClick={Delete} className={styles.buttondelete}>delete</button>
    </div>
  );
}

export default Delete;