import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentCxfirstQualimetrieDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_component_cxfirst_qualimetrie_descriptions';
  info: {
    displayName: 'description';
    icon: 'apps';
  };
  attributes: {
    cxfirst: Schema.Attribute.Component<'component-cxfisrt.description', true>;
    description: Schema.Attribute.Text;
    qualimetrie: Schema.Attribute.Component<
      'component-qualimetrie.qualimetrie',
      true
    >;
  };
}

export interface ComponentCxfisrtDescription extends Struct.ComponentSchema {
  collectionName: 'components_component_cxfisrt_descriptions';
  info: {
    displayName: 'description';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface ComponentKpiCxInfoCxfirst extends Struct.ComponentSchema {
  collectionName: 'components_component_kpi_cx_info_cxfirsts';
  info: {
    displayName: 'infoCxfirst';
    icon: 'chartCircle';
  };
  attributes: {
    dataClient: Schema.Attribute.Component<'component-kpi-cx.kpi-client', true>;
    dataSite: Schema.Attribute.Component<'component-kpi-cx.kpi-site', true>;
    dataUser: Schema.Attribute.Component<'component-kpi-cx.kpi-user', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentKpiCxKpiClient extends Struct.ComponentSchema {
  collectionName: 'components_component_kpi_cx_kpi_clients';
  info: {
    displayName: 'kpiClient';
    icon: 'plus';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentKpiCxKpiSite extends Struct.ComponentSchema {
  collectionName: 'components_component_kpi_cx_kpi_sites';
  info: {
    displayName: 'kpiSite';
    icon: 'plus';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentKpiCxKpiUser extends Struct.ComponentSchema {
  collectionName: 'components_component_kpi_cx_kpi_users';
  info: {
    displayName: 'kpiUser';
    icon: 'plus';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentMapInfoMap extends Struct.ComponentSchema {
  collectionName: 'components_component_map_info_maps';
  info: {
    displayName: 'infoMap';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentQualimetrieDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_component_qualimetrie_descriptions';
  info: {
    displayName: 'description';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface ComponentQualimetrieInformation
  extends Struct.ComponentSchema {
  collectionName: 'components_component_qualimetrie_information';
  info: {
    displayName: 'information';
    icon: 'apps';
  };
  attributes: {
    cxfirst: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    imageCxfirst: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imageQualimetrie: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    qualimetrie: Schema.Attribute.Text;
  };
}

export interface ComponentQualimetrieQualimetrie
  extends Struct.ComponentSchema {
  collectionName: 'components_component_qualimetrie_qualimetries';
  info: {
    displayName: 'qualimetrie';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface ComponentSolutionConnect extends Struct.ComponentSchema {
  collectionName: 'components_component_solution_connects';
  info: {
    displayName: 'connect';
    icon: 'plus';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentSolutionDeploy extends Struct.ComponentSchema {
  collectionName: 'components_component_solution_deploys';
  info: {
    displayName: 'deploy';
    icon: 'plus';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentSolutionExplore extends Struct.ComponentSchema {
  collectionName: 'components_component_solution_explores';
  info: {
    displayName: 'explore';
    icon: 'plus';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentSolutionInfos extends Struct.ComponentSchema {
  collectionName: 'components_component_solution_infos';
  info: {
    displayName: 'infos';
    icon: 'arrowUp';
  };
  attributes: {
    connect: Schema.Attribute.Component<'component-solution.connect', true>;
    deploy: Schema.Attribute.Component<'component-solution.deploy', true>;
    description: Schema.Attribute.Text;
    explore: Schema.Attribute.Component<'component-solution.explore', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentTestimonyFeedbackCenter
  extends Struct.ComponentSchema {
  collectionName: 'components_component_testimony_feedback_centers';
  info: {
    displayName: 'feedbackCenter';
    icon: 'message';
  };
  attributes: {
    feedback: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    post: Schema.Attribute.String;
  };
}

export interface ComponentTestimonyFeedbackLeft extends Struct.ComponentSchema {
  collectionName: 'components_component_testimony_feedback_lefts';
  info: {
    displayName: 'feedbackLeft';
    icon: 'message';
  };
  attributes: {
    feedback: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    post: Schema.Attribute.String;
  };
}

export interface ComponentTestimonyFeedbackRight
  extends Struct.ComponentSchema {
  collectionName: 'components_component_testimony_feedback_rights';
  info: {
    displayName: 'feedbackRight';
    icon: 'message';
  };
  attributes: {
    feedback: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    post: Schema.Attribute.String;
  };
}

export interface ComponentTestimonyInfos extends Struct.ComponentSchema {
  collectionName: 'components_component_testimony_infos';
  info: {
    displayName: 'infos';
    icon: 'plus';
  };
  attributes: {
    centerFeedback: Schema.Attribute.Component<
      'component-testimony.feedback-center',
      true
    >;
    description: Schema.Attribute.Text;
    leftFeedback: Schema.Attribute.Component<
      'component-testimony.feedback-left',
      true
    >;
    rightFeedback: Schema.Attribute.Component<
      'component-testimony.feedback-right',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentTopbannerBanner extends Struct.ComponentSchema {
  collectionName: 'components_component_topbanner_banners';
  info: {
    displayName: 'banner';
    icon: 'picture';
  };
  attributes: {
    backgroundimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentVideoVideoZone extends Struct.ComponentSchema {
  collectionName: 'components_component_video_video_zones';
  info: {
    displayName: 'video-zone';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.Text;
    imageVideo: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'files' | 'videos'>;
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
    title: Schema.Attribute.String;
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

export interface VideoVideoZone extends Struct.ComponentSchema {
  collectionName: 'components_video_video_zones';
  info: {
    displayName: 'video-zone';
    icon: 'play';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component-cxfirst-qualimetrie.description': ComponentCxfirstQualimetrieDescription;
      'component-cxfisrt.description': ComponentCxfisrtDescription;
      'component-kpi-cx.info-cxfirst': ComponentKpiCxInfoCxfirst;
      'component-kpi-cx.kpi-client': ComponentKpiCxKpiClient;
      'component-kpi-cx.kpi-site': ComponentKpiCxKpiSite;
      'component-kpi-cx.kpi-user': ComponentKpiCxKpiUser;
      'component-map.info-map': ComponentMapInfoMap;
      'component-qualimetrie.description': ComponentQualimetrieDescription;
      'component-qualimetrie.information': ComponentQualimetrieInformation;
      'component-qualimetrie.qualimetrie': ComponentQualimetrieQualimetrie;
      'component-solution.connect': ComponentSolutionConnect;
      'component-solution.deploy': ComponentSolutionDeploy;
      'component-solution.explore': ComponentSolutionExplore;
      'component-solution.infos': ComponentSolutionInfos;
      'component-testimony.feedback-center': ComponentTestimonyFeedbackCenter;
      'component-testimony.feedback-left': ComponentTestimonyFeedbackLeft;
      'component-testimony.feedback-right': ComponentTestimonyFeedbackRight;
      'component-testimony.infos': ComponentTestimonyInfos;
      'component-topbanner.banner': ComponentTopbannerBanner;
      'component-video.video-zone': ComponentVideoVideoZone;
      'cross-sell.similar-article': CrossSellSimilarArticle;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'video.video-zone': VideoVideoZone;
    }
  }
}
