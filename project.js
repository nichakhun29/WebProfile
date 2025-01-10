function convertToBinary() {
 
    const decimal = document.getElementById('dec').value;
    
  
    if (decimal === '' || isNaN(decimal)) {
        document.getElementById('result').innerText = 'กรุณากรอกเลขฐาน 10 ที่ถูกต้อง';
        return;
    }

    
    const binary = parseInt(decimal).toString(2);

   
    document.getElementById('result').innerText = `เลขฐาน 10: ${decimal} => เลขฐาน 2: ${binary}`;

}

function calculateSpeed() {
    // รับค่าระยะทางและเวลา
    const distance = parseFloat(document.getElementById("distance").value);
    const time = parseFloat(document.getElementById("hour").value);

    // ตรวจสอบค่าที่กรอก
    if (isNaN(distance) || isNaN(time) || time === 0) {
        document.getElementById("result").innerText = "กรุณากรอกข้อมูลที่ถูกต้อง!";
        return;
    }

    // คำนวณความเร็วเฉลี่ย
    const averageSpeed = distance / time;

    // แสดงผลลัพธ์
    document.getElementById("result").innerText = `ความเร็วเฉลี่ย: ${averageSpeed} กิโลเมตร/ชั่วโมง`;
}
