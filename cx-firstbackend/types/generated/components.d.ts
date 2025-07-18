import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentdesignLeftzone1 extends Struct.ComponentSchema {
  collectionName: 'components_componentdesign_leftzone1s';
  info: {
    displayName: 'leftzone1';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentdesignRightzone1 extends Struct.ComponentSchema {
  collectionName: 'components_componentdesign_rightzone1s';
  info: {
    displayName: 'rightzone1';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CrossSellSimilarArticle extends Struct.ComponentSchema {
  collectionName: 'components_cross_sell_similar_articles';
  info: {
    displayName: 'similar-article';
    icon: 'arrowDown';
  };
  attributes: {
    crossSellArticle: Schema.Attribute.Relation<
      'oneToOne',
      'api::article.article'
    >;
    script: Schema.Attribute.RichText & Schema.Attribute.Private;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'componentdesign.leftzone1': ComponentdesignLeftzone1;
      'componentdesign.rightzone1': ComponentdesignRightzone1;
      'cross-sell.similar-article': CrossSellSimilarArticle;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
