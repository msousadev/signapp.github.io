import React from 'react';
import $ from 'jquery';
import {Button,FormGroup,Label,Input,Form,Col, InputGroup,InputGroupAddon,InputGroupText, Container, Jumbotron,CustomInput} from 'reactstrap';

class SideBar extends React.Component {


   constructor() {
    super()
    this._handleClick = this._handleClick.bind(this);
   // this.teste = this.teste.bind(this);
    
    this.state = {
      nome:'Nome do profissional',
      cargo:'Cargo/Area',
      endereco:'Logradouro da empresa',
      endereco2:'Complemento',
      telefone:'telefone, Ramal ou Celular',
      email:'endereço de email',
      site:'globalcare.com.br'
    }
  }

  componentDidMount() {
   const valorSrc= 'https://live.staticflickr.com/65535/49012854346_5a3f7e446a_m.jpg';
   this._handleClick(valorSrc);
  }
  _handleClick(valorSrc){
   let iSrc = valorSrc;
  var link;
  var img = new Image();
  img.crossOrigin = "anonymous";
  img.src = valorSrc;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  
  img.onload = function(){
    ctx.drawImage(img, 0, 0, 200, 200);
   // link.href = document.getElementById('canvas').toDataURL();
  };

 // document.body.appendChild(link);
}


dropdownChanged = (event) =>{
  if(event.target.value == 0){    
    this.mudarImagemModelo()
       }
    if(event.target.value == 1){    
     this.mudarImagemGlobal()
        }
      if(event.target.value == 2){    
        this.mudarImagemUnit()
       }
       if(event.target.value == 3){    
        this.mudarImagemDN()
       }
       if(event.target.value == 4){    
        this.mudarImagemRelief()
       }
       if(event.target.value == 5){    
        this.mudarImagemVivisol()
       }
       if(event.target.value == 6){    
        this.mudarImagemGlobalCamp()
       }
    }

update = (name, e) => {
  this.setState({ [name]: e.target.value });
}
mudarImagemModelo = () =>{
  const valorSrc= 'https://live.staticflickr.com/65535/49012854346_5a3f7e446a_m.jpg';
   this._handleClick(valorSrc);
   this.setState({
    nome:'Nome do profissional',
    cargo:'Cargo/Area',
    endereco:'Logradouro da empresa',
    telefone:'telefone, Ramal ou Celular',
    email:'endereço de email',
    site:'globalcare.com.br'
   })
}
mudarImagemUnit = ()=>{
  const valorSrc= 'https://live.staticflickr.com/65535/49012326078_3373e15416_m.jpg';
   this._handleClick(valorSrc);
   this.setState({
    nome:'',
    cargo:'',
    endereco:'Rua Barata Ribeiro, 246, 3º Andar',
    endereco2:'São Paulo - SP, Cep 01308-000',
    telefone:'Tel. (11) 3138-6610',
    email:'',
    site:'www.unitcare.com.br'
   })
}
mudarImagemDN = ()=>{
  const valorSrc= 'https://live.staticflickr.com/65535/49012325908_aef457a9e8_m.jpg';
   this._handleClick(valorSrc);
   this.setState({
    nome:'',
    cargo:'',
    endereco:'Rua Alexandre de Humboldt, 153 - Pituba',
    endereco2:'Salvador - BA, Cep 41810-030',
    telefone:'Tel. (71) 3033-2999',
    email:'',
    site:'www.globalcare.com.br/br/sobre/dn-global'
   })
}
mudarImagemVivisol = ()=>{
  const valorSrc= 'https://live.staticflickr.com/65535/49012854271_34df95e406_m.jpg';
   this._handleClick(valorSrc);
   this.setState({
    nome:'',
    cargo:'',
    endereco:'Rua Conde de São Joaquim, 327 - Bela Vista',
    endereco2:'São Paulo - SP, Cep 01320-010',
    telefone:'Tel. 55 (11) 4858-0338/Ramal 45XX',
    email:'',
    site:'www.vivisol.com.br'
    

   })
}
mudarImagemGlobal = ()=>{
  const valorSrc= 'https://live.staticflickr.com/65535/49012854346_5a3f7e446a_m.jpg';
   this._handleClick(valorSrc);
   this.setState({
    nome:'',
    cargo:'',
    endereco:'Rua Barata Ribeiro, 246 - Bela Vista',
    endereco2:'São Paulo - SP, Cep 01308-000',
    telefone:'Tel. (11) 3124-4555/Ramal 45XX',
    email:'',
    site:'www.globalcare.com.br'
    

   })
}

mudarImagemGlobalCamp = ()=>{
  const valorSrc= 'https://live.staticflickr.com/65535/49012854346_5a3f7e446a_m.jpg';
   this._handleClick(valorSrc);
   this.setState({
    nome:'',
    cargo:'',
    endereco:'Rua Santos Dumont, 323 - Conjunto 02, Cambuí',
    endereco2:'Campinas - SP, Cep 13024-020',
    telefone:'Tel. (19) 3236-5362',
    email:'',
    site:'www.globalcare.com.br'
    

   })
}
mudarImagemRelief = ()=>{
  const valorSrc= 'https://live.staticflickr.com/65535/48379737281_21e903b630_m.jpg';
   this._handleClick(valorSrc);
}
  
  render() {
    return (
       <Form> 
          <Jumbotron style={{padding:"1rem 2rem"}}>
            <Container fluid={true}>
       <FormGroup row>
          <Label for="exampleSelect" sm={2}>Selecione a Empresa</Label>
          <Col sm={2}>
          <Input onChange={this.dropdownChanged} type="select" name="select" id="exampleSelect">
            <option value={0}>Modelo padrão</option>
            <option value={1}>Global Care SP</option>
            <option value={6}>Global Care Campinas</option>
            <option value={3}>Global DN</option>
            <option value={2}>Unitcare</option>            
            {/* <option value={4}>Rede Relief</option> */}
            <option value={5}>Vivisol</option>
          </Input>
          </Col><Col sm={2}></Col>
          <Col sm={6}>  <Button color="info"  target="_blank" href="https://support.office.com/pt-br/article/criar-e-adicionar-uma-assinatura-a-mensagens-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2">Como Adicionar uma assinatura ao Outlook</Button>{' '}
          <Button color="info" target="_blank" href="https://support.google.com/mail/answer/8395?co=GENIE.Platform%3DDesktop&hl=pt-BR">Como adicionar uma assinatura ao Gmail</Button></Col>
        </FormGroup>

        <FormGroup row>
 
        <Col sm={6}>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Nome:</InputGroupText>
        </InputGroupAddon>
        <Input name="nome" value={this.state.nome} onChange={(e) => this.update("nome", e)} placeholder='Nome do profissional' />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Cargo:</InputGroupText>
        </InputGroupAddon>
        <Input value={this.state.cargo} onChange={(e) => this.update("cargo", e)}  placeholder='Cargo do profissional'  />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Endereço:</InputGroupText>
        </InputGroupAddon>
        <Input value={this.state.endereco} onChange={(e) => this.update("endereco", e)} />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Complemento:</InputGroupText>
        </InputGroupAddon>
        <Input value={this.state.endereco2} onChange={(e) => this.update("endereco2", e)} />
      </InputGroup>
      
</Col>
<Col sm={6}>
<InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Telefone:</InputGroupText>
        </InputGroupAddon>
        <Input value={this.state.telefone} onChange={(e) => this.update("telefone", e)} />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>email:</InputGroupText>
        </InputGroupAddon>
        <Input value={this.state.email} onChange={(e) => this.update("email", e)} placeholder='exemplo@email.com.br'/>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>site:</InputGroupText>
        </InputGroupAddon>
        <Input  value={this.state.site} onChange={(e) => this.update("site", e)}/>
      </InputGroup>
</Col>
</FormGroup>

<FormGroup row>
  <Col sm={6}>

 

{/*  
        <Label for="exampleCheckbox">Switches</Label>
        <div>
          <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
        
        </div> */}
 

<h4>Modelo de assinatura</h4>
<br/>
     <div id="html-content-holder" style={{backgroundColor: "#fff", width:"660px"}}>
<div style={{width:"500px", height:"200px", fontFamily: "Arial",fontSize:"17px", color:"#777", cursor:" default", lineHeight:" 140%"}}>
<canvas id="canvas" width="500" height="240" style={{height:"120%"}}></canvas>
<p style={{marginTop:" -240px",marginLeft:"43%",width:"100%"}}>
<b style={{fontSize:"30px"}} >{this.state.nome}</b><br/>
<div style={{padding:"10px 0px 0px 0px"}}  >
<b style={{fontSize:"25px"}} >{this.state.cargo}</b><br/>
</div>
<div className="info2">
<div className="info"  >
<b style={{fontSize:"18px"}} >{this.state.endereco}</b><br/>
</div>
<div className="info"  >
<b style={{fontSize:"18px"}} >{this.state.endereco2}</b><br/>
</div>
<div className="info"  >
<b style={{fontSize:""}} >{this.state.telefone}</b><br/>
</div>
<div className="info"  >
<b style={{color:"#4A9DF0"}} >{this.state.email}</b><br/>
</div>
<div className="info"   >
<b style={{color:"#4A9DF0"}} >{this.state.site}</b><br/>
</div>
</div>
</p>
</div>
</div>
<br/>
  
    </Col>
    <Col sm={6}>
    
    <Button  color="secondary" id="btn-Preview-Image" type="button" value="Gerar assinatura">Gerar Assinatura</Button>{' '}
    <Button outline disabled={!this.state.nome} color="success" id="btn-Convert-Html2Image" href="#">Download    </Button>
    <br/>
    <br/>
    <div id="previewImage">
    </div>
    </Col>
 </FormGroup>
 </Container>
 
 
 
 </Jumbotron>


  
     </Form>
     
    );
  }
}

export default SideBar;
