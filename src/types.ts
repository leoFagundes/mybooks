export interface BookProps {
  id: string;
  title: string;
  description: string;
  genres: string[];
  img: string;
  pdf?: string | File;
  rate: string;
  authors: string[];
  link?: string;
}

export interface UserProps {
  _id?: string;
  username: string;
  email?: string;
  token?: string;
  books?: BookProps[];
}

// Tipos da API do Google

// Tipo para os identificadores de livro
export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

// Tipo para o resumo da panelização
export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

// Tipo para os links das imagens do livro
export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

// Tipo para informações de venda
export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice: {
    amount: number;
    currencyCode: string;
  };
  retailPrice: {
    amount: number;
    currencyCode: string;
  };
  buyLink: string;
  offers: {
    finskyOfferType: number;
    listPrice: {
      amountInMicros: number;
      currencyCode: string;
    };
    retailPrice: {
      amountInMicros: number;
      currencyCode: string;
    };
    giftable: boolean;
  }[];
}

// Tipo para informações de acesso
export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: {
    isAvailable: boolean;
    acsTokenLink: string;
  };
  pdf: {
    isAvailable: boolean;
    acsTokenLink: string;
  };
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

// Tipo para informações de busca
export interface SearchInfo {
  textSnippet: string;
}

// Tipo para informações do volume do livro
export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: {
    text: boolean;
    image: boolean;
  };
  pageCount: number;
  printType: string;
  categories: string[];
  maturityRating: string;
  allowAnonLogging: boolean;
  averageRating?: string;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

// Tipo para o volume de livro completo
export interface BookVolume {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}
