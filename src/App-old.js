import React, { Component, } from 'react';

class App extends Component {
  
  constructor(){
    super()
    this.nama = "Andi"
    this.login = true
  }

  hitung(x){
    return x*x
  }
  
  render() {
    let styles = {
      color: 'yellow',
      background: 'black'
    }

    const siswa = ["andi","budi","caca"]
    const listSiswa = siswa.map((v,i) => 
      <li key={i}>{v}</li>
    )

    return (
      <div>
        {
          ( this.login ) ? 
          <div style={styles}>
            <h1 style={{ color: 'white', background:'red' }}>Selamat Datang</h1>
            <h1>Hello World { this.nama }</h1>
            <h1>Hasil = { this.hitung(5) }</h1>
            <h1>Anda sudah login</h1>
            <h1>List Siswa</h1>
            <ul>
              {listSiswa}
            </ul>
          </div> : 
          <h1>Anda belum login</h1>
        }
      </div>
       
    );
  }
}

export default App;