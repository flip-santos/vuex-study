<template>
  <div class="inner-container">
    <form class="questions" @submit.prevent="testAccount">

      <div class="question active">
        <p>Olá. Seja bem vindo ao Moip!</p>
        <p>Sabemos que receber pagamentos pela internet pode ser um desafio! Mas não se preocupe, somos especialistas no assunto e vamos te ajudar.</p>
        <p>Quando o assunto é <strong>vender pela internet</strong>, como você definiria seu perfil?</p>
        <checkbox class="seller-profile" :options="Seller_Profiles" :model.sync="createAccount.sellerProfile"></checkbox>
      </div>

      <div class="question">
        <p>Sem problemas! Nós temos mais de 100.000 clientes, sabia? Você veio ao lugar certo.</p>
        <p>Você gostaria de receber pagamentos como <strong>pessoa física</strong> ou <strong>pessoa jurídica</strong> utilizando o Moip?</p>
        <!-- <checkbox :options="accountTypes" class="margin-top-sm margin-bottom-sm"></checkbox> -->
        <div class="tip">
          <span class="icon-warning-full"></span>
          Essa informação não poderá ser alterada após a confirmação dos dados.
        </div>
      </div>

      <div class="question">
        <p>Qual é o seu <strong>nome</strong>?</p>
        <div class="text-input">
          <input type="text" placeholder="" v-model.sync="createAccount.person.name">
        </div>
        <div class="tip">Deve ser idêntico ao seu documento de identidade.</div>
      </div>

      <div class="question">
        <p>Prazer, USUÁRIO! Você poderia nos informar o seu <strong>CPF</strong>?</p>
        <div class="row">
          <div class="text-input col-7">
            <input type="text" placeholder="Número do seu CPF">
          </div>
          <div class="text-input col-4 _offset-1">
            <input type="text" placeholder="Data de emissão">
          </div>
        </div>
        <div class="tip">Digite apenas os números</div>
      </div>

      <div class="question">
        <p>Prazer, USUÁRIO! Você poderia nos informar o <strong>CNPJ</strong> do seu negócio?</p>
        <div class="row">
          <div class="text-input col-7">
            <input type="text" placeholder="Número do CNPJ">
          </div>
          <div class="text-input col-4 _offset-1">
            <input type="text" placeholder="Data de abertura">
          </div>
        </div>
        <div class="tip">Digite apenas os números</div>
      </div>

      <div class="question">
        <p>Qual é a sua <strong>data de nascimento</strong>?</p>
        <div class="row">
          <div class="text-input col-4">
            <input type="text" placeholder="">
          </div>
        </div>
        <div class="tip">
          Você precisa ser maior de idade para utilizar o Moip.
        </div>
      </div>

      <div class="question">
        <p>Qual é o <strong>CEP</strong> da sua residência?</p>
        
        <div class="row">
          <div class="text-input col-4">
            <input type="text">
          </div>
          <div class="col-7 _offset-1 padding-top-md">
            <a href="#" class="font-size-sm">Não encontrou seu CEP?</a>
          </div>
        </div>

        <div class="tip">Digite apenas os números</div>
          <!-- 
          <div class="address-result" v-show="addressExists">
            <span v-text="userAddress.street"></span>,
            <span v-text="userAddress.streetNumber"></span> -
            <span v-text="userAddress.district"></span>
            <span v-text="userAddress.city"></span>,
            <span v-text="userAddress.state"></span>
            <button @click.prevent="removeAddress">{{labels.remove}}</button>
          </div>

          <div class="error-message" v-show="addressError">
            <p>Não foi possível encontrar seu endereço</p>
          </div>
          -->
       </div>

      <div class="question">
        <p>Qual é o nome da seu <strong>negócio</strong>?</p>
        <div class="text-input">
          <input type="text">
        </div>
        <div class="tip">Essa informação aparecerá nos emails customizados e faturas para seus compradores. Legal né?</div>
      </div>

      <div class="question">
        <p>Qual é o <strong>website</strong> do seu negócio?</p>
        <div class="text-input">
          <input type="url">
        </div>
        <div class="tip">Pode ser um site, plataforma ou market place. Se for um aplicativo, coloque o endereço para download.</div>
        <div class="checkbox margin-top-sm">
          <input id="without-website" type="checkbox">
          <label for="without-website">Não possuo website</label>
        </div>
      </div>

      <div class="question">
        <p>Qual é a atividade principal do seu negócio?</p>
        <!-- <multi-select 
          :multiple="false" 
          :searchable="true" 
          :options="businessSegments" 
          selected-label="Selecionado" 
          select-label="...ou pressione Enter para selecionar" 
          deselect-label=" "
          placeholder="Escolha uma opção"  
          @update="updateBusinessSegment">
        </multi-select> -->
        <div class="tip">Leve em consideração o que você mais vende, ou vai vender.</div>
      </div>

      <div class="question">
        
        <p>Qual é a sua expectativa de faturamento mensal?</p>
        <!-- <checkbox :options="revenueOptions" class="list margin-top-sm margin-bottom-sm" @change="updateRevenue"></checkbox> -->
        
        <!-- <div class="tip" v-show="!highRevenue">Se sua expectativa for maior que R$5 mil, precisaremos de algumas informações extras.</div> -->
        
        <!-- <div class="margin-top-md" v-show="highRevenue"> -->
        <div class="margin-top-md">

          <div class="row">
            <p>Qual é o nome da sua <strong>mãe</strong></p>
            <div class="text-input">
              <input type="text">
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <p>Qual é o número do seu celular?</p>
              <div class="text-input">
                <input type="text">
              </div>
              <div class="tip">Digite apenas os números.</div>
            </div>
            <div class="col-6">
              <br>
              <p>E o número do seu telefone fixo?</p>
              <div class="text-input">
                <input type="text">
              </div>
              <div class="tip">Se houver.</div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <button type="submit" class="button _primary">Enviar</button>
      </div>    
      
    </form>
  </div>
</template>

<style lang="less">
  @import (reference) '../assets/styles/references';

  .questions {
    .row;
    padding: @md-spacer*2 0;

    .question {
      font-size: @lg-font-size;
      padding: @md-spacer;
      margin: @md-spacer 0;
      background-color: @white;
      border-radius: @border-radius;
      box-shadow: 0 2px 6px fade(@black, 25%);
    }
    .tip {
      padding: @xs-spacer;
      font-size: @sm-font-size;
      background-color: @light-gray;
      margin: @xs-spacer 0;
    }

  }
</style>

<script>
  import Checkbox from './Checkbox';
  // import Multiselect from 'vue-multiselect';
  import Account_Types from '../data/Account_Types';
  import Business_Segments from '../data/Business_Segments';
  import Revenue_Options from '../data/Revenue_Options';
  import Seller_Profiles from '../data/Seller_Profiles';
  import { AddressModel, CreateAccountModel, PhoneModel } from '../models/create-account-model';

  // Handling data from localStorage
  let createAccountModel = new CreateAccountModel;
  let storage = window.localStorage.getItem('createAccount');
  let recordedData = {};
  try { recordedData = JSON.parse(storage) } catch(err) {}

  export default {
    data() {
      return {
        Seller_Profiles,
        createAccount: Object.assign(createAccountModel, recordedData),
        userAddress: new AddressModel
      }
    },
    components: {
      Checkbox
    },
    methods: {
      testAccount() {
        
      }
    }
  }
</script>