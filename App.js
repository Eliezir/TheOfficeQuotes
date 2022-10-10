import React, {useState, useRef} from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, Text, StatusBar, StyleSheet} from 'react-native';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';


var Michael = 'https://img.ibxk.com.br/2021/11/18/18160714863455.jpg';
var Pam = 'https://rollingstone.uol.com.br/media/uploads/pam-the-office-jenna-fischer-foto-reproducao.jpg'
var Dwight = 'https://rollingstone.uol.com.br/media/_versions/rainn_wilson_como_dwight_schrute_em_the_office_foto__reproducao_via_imdb_widelg.jpg'
var Jim = 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/john-krasinski.jpg?quality=70&strip=all'
var Jan = 'https://media.vanityfair.com/photos/56cda149a0125ee03f19b545/master/pass/dam-online-culture-tvofficejan.jpg'
var Angela = 'https://uproxx.com/wp-content/uploads/2022/02/TheOfficeAngela.jpg?w=722'
var Erin = 'https://noticiasdatv.uol.com.br/media/_versions/artigos/atriz-ellie-kemper-serie-the-office-credito-divulgacao-nbc_fixed_large.jpg'
var Andy = 'https://www.looper.com/img/gallery/the-office-the-real-reason-andy-was-promoted-over-dwight/intro-1586377261.jpg'
var Toby  = 'https://i.pinimg.com/originals/bc/ee/01/bcee01e5f09c2a66113edacade661e68.jpg'
var Kevin = 'https://uploads.metropoles.com/wp-content/uploads/2021/11/24183933/the-office-kevin-malone-1-600x350.jpg'
var Stanley  = 'https://www.looper.com/img/gallery/whatever-happened-to-stanley-from-the-office/intro-1574100890.jpg'
var Holly  = 'https://www.looper.com/img/gallery/the-worst-thing-holly-flax-ever-did-on-the-office/l-intro-1625937720.jpg'
var Meredith  = 'https://www.looper.com/img/gallery/whatever-happened-to-meredith-from-the-office/intro-1526005235.jpg'
var Ryan  = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbwlpKhMkBNUWcYMSKX8QiYlh61mkvuG6fA&usqp=CAU'
var Kelly  = 'https://br.web.img3.acsta.net/r_1280_720/newsv7/20/08/20/22/38/41690190.jpg'
var Gabe  = 'https://assets.website-files.com/5de5d1334a5986a606602117/5de5d15c766a8e4ba44a0738_Cisco-Phone-and-Apple-MacBook-Pro-Laptop-Used-by-Zach-Woods-Gabe-Lewis-in-The-Office-1.jpeg'
var Darryl   = 'https://i2.wp.com/devsari.com/wp-content/uploads/2021/01/HP-Monitor-Used-by-Craig-Robinson-Darryl-Philbin-in-The-Office-%E2%80%93-Season-9-Episode-9-1-scaled.jpg?fit=1500%2C844&ssl=1'
var Oscar   = 'https://www.looper.com/img/gallery/the-worst-thing-oscar-martinez-ever-did-on-the-office/l-intro-1648759564.jpg'
var Phyllis   = 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/11/Phyllis-The-Office.jpg'
const characters = ['Michael', 'Jim', 'Dwight', 'Pam','Jan','Angela','Erin','Andy','Toby','Kevin','Stanley','Holly','Meredith', 'Ryan','Kelly','Gabe','Darryl','Oscar','Phyllis']
const charactersImgs = [Michael, Jim, Dwight, Pam, Jan, Angela , Erin, Andy,Toby, Kevin,Stanley,Holly,Meredith, Ryan,Kelly,Gabe,Darryl,Oscar,Phyllis]
const urlMichael = "https://theofficequotesapi.null3000.repl.co/api/v1/quote/micheal"
const urlDwight = "https://theofficequotesapi.null3000.repl.co/api/v1/quote/dwight"

export default function TheOfficeQuotes() {

  const[frases,setFrases] = useState();
  const[btnShow, setBtn] = useState(0)
  const viewRef = useRef();
  const[img,setImg] = useState(require('./Dunder-Mifflin.png'));


  
  function quote(){
    setBtn(1)
    fetch('https://www.officeapi.dev/api/quotes/random').then(res => res.json()).then(frases => {
      setFrases(frases)
    var imagem = characters.indexOf(frases.data.character.firstname)
    setImg({uri:charactersImgs[imagem]})
  })
  }
 


  const shareQuote = async () => {
    console.log('uri')
  try{
    const uri = await captureRef(viewRef, {
      result: 'tmpfile',
      quality: 0.7,
      format: 'png',
    });
    await Sharing.shareAsync(uri);
  }catch(err){
    console.error(err);
  }
  console.log(2)
}


 return (
   <SafeAreaView style={styles.Container} ref={viewRef}>
    <StatusBar/>
    <View  style={styles.MainContainer}>
  <Text style={styles.Title}>The Office Quotes</Text>
    <Image
    source = {img}
    style = {styles.img}
    />
    <Text style={styles.frase}>{frases ? frases.data.content : null}</Text>
    <Text style={styles.characters}>{frases ? frases.data.character.firstname : null} {frases ? frases.data.character.lastname : null}</Text>
    </View>
    <TouchableOpacity style = {[styles.botao, {marginTop: 40}]} onPress={quote}>
      <View style={styles.botaoarea} >
        <Text style = {styles.botaotexto}>That's what she said</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style = {[styles.botao, {opacity: btnShow}]} onPress={shareQuote}>
      <View style={styles.botaoarea} >
        <Text style = {styles.botaotexto}>Compartilhar</Text>
      </View>
    </TouchableOpacity>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
  },
  MainContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'80%',
  },
  img:{
    height: 200,
    width: 300,
    marginTop:50,
    marginBottom:50,
  },
  frase:{
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    fontStyle: 'italic',
    color: '#ffffff',
    fontWeight: 'bold',
    minHeight: 50,
  },
  botao:{
    width: 230,
    height: 50, 
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 25, 
    margin: 15
  },
  botaoarea:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaotexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'

  },
  Title:{
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
  },
  characters:{
    textAlign: 'center',
    fontSize: 10,
    marginTop: 10,
    fontStyle: 'italic',
    color: '#ffffff',
    fontWeight: 'bold',
    minHeight: 50,
  }

});