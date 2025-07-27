import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentBannerBannerTop extends Struct.ComponentSchema {
  collectionName: 'components_component_banner_banner_tops';
  info: {
    displayName: 'bannerTop';
    icon: 'dashboard';
  };
  attributes: {
    backgroundimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    script: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ComponentBlogBlog extends Struct.ComponentSchema {
  collectionName: 'components_component_blog_blogs';
  info: {
    displayName: 'blog';
    icon: 'apps';
  };
  attributes: {
    banner: Schema.Attribute.Component<'component-banner.banner-top', true>;
  };
}

export interface ComponentEditorialTextandImage extends Struct.ComponentSchema {
  collectionName: 'components_component_editorial_textand_images';
  info: {
    displayName: 'textandImage';
    icon: 'apps';
  };
  attributes: {
    freeText1: Schema.Attribute.RichText;
    freeText2: Schema.Attribute.RichText;
    imageBlog1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imageBlog2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentKpiCxInfoCxfirst extends Struct.ComponentSchema {
  collectionName: 'components_component_kpi_cx_info_cxfirsts';
  info: {
    displayName: 'infoCxfirst';
    icon: 'chartCircle';
  };
  attributes: {
    dataClient: Schema.Attribute.Component<
      'component-kpi-cx.kpi-client',
      false
    >;
    dataSite: Schema.Attribute.Component<'component-kpi-cx.kpi-site', false>;
    dataUser: Schema.Attribute.Component<'component-kpi-cx.kpi-user', false>;
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

export interface ComponentLefttextLeftzone extends Struct.ComponentSchema {
  collectionName: 'components_component_lefttext_leftzones';
  info: {
    displayName: 'leftzone';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tag1: Schema.Attribute.Component<'component-tag.tag', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentMapCarte extends Struct.ComponentSchema {
  collectionName: 'components_component_map_cartes';
  info: {
    displayName: 'carte';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    script: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
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

export interface ComponentRighttextRightZone extends Struct.ComponentSchema {
  collectionName: 'components_component_righttext_right_zones';
  info: {
    displayName: 'rightZone';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tag2: Schema.Attribute.Component<'component-tag.tag', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentSolutionConnectInfos extends Struct.ComponentSchema {
  collectionName: 'components_component_solution_connect_infos';
  info: {
    displayName: 'infos';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
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

export interface ComponentTagTag extends Struct.ComponentSchema {
  collectionName: 'components_component_tag_tags';
  info: {
    displayName: 'tag';
  };
  attributes: {
    tag: Schema.Attribute.Enumeration<['Economie', 'Customer']>;
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
      false
    >;
    description: Schema.Attribute.Text;
    leftFeedback: Schema.Attribute.Component<
      'component-testimony.feedback-left',
      false
    >;
    rightFeedback: Schema.Attribute.Component<
      'component-testimony.feedback-right',
      false
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
    horizontalimage: Schema.Attribute.Media<'images' | 'files'>;
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
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    title: Schema.Attribute.String;
  };
}

export interface MenuDropdown extends Struct.ComponentSchema {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'dropdown';
    icon: 'arrowDown';
  };
  attributes: {
    section: Schema.Attribute.Relation<'oneToOne', 'api::section.section'>;
    title: Schema.Attribute.String;
  };
}

export interface MenuLink extends Struct.ComponentSchema {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MenuMenuLinlk extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_linlks';
  info: {
    displayName: 'menuLinlk';
    icon: 'link';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
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
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    preventIndexing: Schema.Attribute.Boolean;
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

export interface VerbatimVerbatim extends Struct.ComponentSchema {
  collectionName: 'components_verbatim_verbatims';
  info: {
    displayName: 'verbatim';
    icon: 'information';
  };
  attributes: {
    verbatim: Schema.Attribute.Text;
  };
}

export interface VideoVideoZone extends Struct.ComponentSchema {
  collectionName: 'components_video_video_zones';
  info: {
    displayName: 'video-zone';
    icon: 'play';
  };
  attributes: {
    description: Schema.Attribute.Text;
    imageVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component-banner.banner-top': ComponentBannerBannerTop;
      'component-blog.blog': ComponentBlogBlog;
      'component-editorial.textand-image': ComponentEditorialTextandImage;
      'component-kpi-cx.info-cxfirst': ComponentKpiCxInfoCxfirst;
      'component-kpi-cx.kpi-client': ComponentKpiCxKpiClient;
      'component-kpi-cx.kpi-site': ComponentKpiCxKpiSite;
      'component-kpi-cx.kpi-user': ComponentKpiCxKpiUser;
      'component-lefttext.leftzone': ComponentLefttextLeftzone;
      'component-map.carte': ComponentMapCarte;
      'component-qualimetrie.information': ComponentQualimetrieInformation;
      'component-righttext.right-zone': ComponentRighttextRightZone;
      'component-solution-connect.infos': ComponentSolutionConnectInfos;
      'component-solution.connect': ComponentSolutionConnect;
      'component-solution.deploy': ComponentSolutionDeploy;
      'component-solution.explore': ComponentSolutionExplore;
      'component-solution.infos': ComponentSolutionInfos;
      'component-tag.tag': ComponentTagTag;
      'component-testimony.feedback-center': ComponentTestimonyFeedbackCenter;
      'component-testimony.feedback-left': ComponentTestimonyFeedbackLeft;
      'component-testimony.feedback-right': ComponentTestimonyFeedbackRight;
      'component-testimony.infos': ComponentTestimonyInfos;
      'component-topbanner.banner': ComponentTopbannerBanner;
      'component-video.video-zone': ComponentVideoVideoZone;
      'cross-sell.similar-article': CrossSellSimilarArticle;
      'menu.dropdown': MenuDropdown;
      'menu.link': MenuLink;
      'menu.menu-linlk': MenuMenuLinlk;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'verbatim.verbatim': VerbatimVerbatim;
      'video.video-zone': VideoVideoZone;
    }
  }
}
