export class AddressModel {
  constructor () {
    this.street = ''       // "Av. Brigadeiro Faria Lima"
    this.streetNumber = '' // "2927"
    this.district = ''     // "Itaim"
    this.zipCode = ''      // "01234-000"
    this.city = ''         // "São Paulo"
    this.state = ''        // "SP"
    this.country = ''      // "BRA"
  }
}

export class BusinessSegmentModel {
  constructor () {
    this.id = '' // "5"
  }
}

export class CompanyModel {
  constructor () {
    this.businessName = '' // "Moip Pagamentos S/A"
    this.openingDate = ''  // "2001-01-01"
    this.constitutionType = '' // string
    this.taxDocument = new TaxDocumentModel()
    this.phone = new PhoneModel()
    this.address = new AddressModel()
    this.businessSegment = new BusinessSegmentModel()
  }
}

export class CreateAccountModel {
  constructor () {
    this.site = ''            // "http://moip.com.br"
    this.type = ''            // "merchant"
    this.billingName = ''     // 13 caracteres - validação de nome
    this.monthlyRevenue = ''  // string
    this.password = ''        // mínimo 6 caracteres
    this.sellerProfile = ''   // A definir
    this.businessSegment = new BusinessSegmentModel()
    this.company = new CompanyModel()
    this.email = new EmailModel()
    this.person = new PersonModel()
    this.tosAcceptance = new TosAcceptanceModel()
  }
}

export class EmailModel {
  constructor () {
    this.address = '' // "joaodasilva@email.com"
  }
}

export class IdentityDocumentModel {
  constructor () {
    this.type = ''  // "RG"
    this.number = '' // "434322344"
  }
}

export class ParentsNameModel {
  constructor () {
    this.mother = '' // "Maria da Silva"
  }
}

export class PersonModel {
  constructor () {
    this.name = ''      // "Runscope Random 3206",
    this.birthDate = '' // "1990-01-01",
    this.taxDocument = new TaxDocumentModel()
    this.parentsName = new ParentsNameModel()
    this.phone = new PhoneModel()
    this.alternativePhones = [ new PhoneModel() ]
    this.address = new AddressModel()
  }
}

export class PhoneModel {
  constructor () {
    this.number = ''      // "965213244"
    this.areaCode = ''    // "11"
    this.countryCode = '' // "55"
  }
}

export class TaxDocumentModel {
  constructor () {
    this.type = ''             // "CPF",
    this.number = ''           // "742.520.863-61"
    this.issueDate = ''         // 1983-12-22
  }
}

export class TosAcceptanceModel {
  constructor () {
    this.ip = ''         // "127.0.0.1",
    this.userAgent = ''  // "PawClient" concatenar com nome da aplicação.
    this.acceptedAt = '' // "2016-02-15T12:00:20.000-02:00",
  }
}
