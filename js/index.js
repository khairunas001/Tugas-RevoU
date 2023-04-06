function calculatetriangle(){
    const alas= document.getElementById("alas-triangle").value;
    const tinggi= document.getElementById("high-triangle").value;
    const kolom1= document.getElementById("Luas_Segitiga_1").value;
    const kolom2= document.getElementById("Luas_Segitiga_2").value;
    const kolom3= document.getElementById("Luas_Segitiga_3").value;
    const luas= alas*tinggi/2;
    kolom1.innerHTML= "L = 1/2 x a x t";
    kolom2.innerHTML= "L = 1/2 x "+alas+" x "+tinggi;
    kolom3.innerHTML= "L = "+luas;
    alert("Luas Segitiga = "+luas+" cm2");
    console.log(luas);     
  }
  function kelilingtriangle () {
    const sisi1= document.getElementById("sisi1").value;
    const sisi2= document.getElementById("sisi2").value;
    const sisi3= document.getElementById("sisi3").value;
    const kolom1= document.getElementById("Keliling_Segitiga_1");
    const kolom2= document.getElementById("Keliling_Segitiga_2");
    const kolom3= document.getElementById("Keliling_Segitiga_3");
    const keliling= parseInt(sisi1)+parseInt(sisi2)+parseInt(sisi3);
    kolom1.innerHTML= "K = s1 + s2 + s3";
    kolom2.innerHTML= "K = "+sisi1+" + "+sisi2+" + "+sisi3;
    kolom3.innerHTML= "K = "+keliling;
    alert(keliling);
    console.log(keliling);
  }
  function calculatejajargenjang(){
    const alas= document.getElementById("alas-jajargenjang").value;
    const tinggi= document.getElementById("high-jajargenjang").value;
    const kolom1= document.getElementById("Luas_Jajargenjang1");
    const kolom2= document.getElementById("Luas_Jajargenjang2");
    const kolom3= document.getElementById("Luas_Jajargenjang3");
    const luas= alas*tinggi;
    const Luas_Jajargenjang = document.getElementById("Luas_Jajargenjang");
    kolom1.innerHTML= "L = a x t";
    kolom2.innerHTML= "L = "+alas+" x "+tinggi;
    kolom3.innerHTML= "L = "+luas+ " cm2";
    alert("Luas Jajargenjang = "+luas+" cm2");
    console.log(luas);    
  }
  function kelilingjajargenjang () {
    const sisi1= document.getElementById("sisi_jj1").value;
    const sisi2= document.getElementById("sisi_jj2").value;
    const kolom1= document.getElementById("keliling_jajargenjang1");
    const kolom2= document.getElementById("keliling_jajargenjang2");
    const kolom3= document.getElementById("keliling_jajargenjang3");
    const keliling= (Number(sisi1)+Number(sisi2))*2;
    const keliling_jajargenjang = document.getElementById("keliling_jajargenjang");
    kolom1.innerHTML= "K = 2 x (s1 + s2)";
    kolom2.innerHTML= "K = 2 x ("+sisi1+" + "+sisi2+")";
    kolom3.innerHTML= "K = "+keliling +" cm";
    alert(keliling);
    console.log(keliling);
}