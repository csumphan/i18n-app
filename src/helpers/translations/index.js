import React from 'react'

export const translations = {
  'en-US': {
    myAccount: 'My Account',
    dashboard: 'Dashboard',
    search: 'Search',
    apiStatusByDatacenter: 'API Status Code By Datacenter',
    pageVisitByDatacenter: 'Page Visit By Datacenter',
    topSearchTerms: 'Top Search Terms',
    signUpCount: 'Sign up Count by Time',
    statusCodeCount: 'API Status Code By Datacenter',
    userAnalysis: 'User Analysis for Your Web Application',
    asia: 'Asia',
    northAmerica: 'North America',

  },
  'es-MX': {
    myAccount: 'Mi Cuenta',
    dashboard: 'Tablero',
    search: 'Buscar',
    apiStatusByDatacenter: 'Código de estado de API por centro de datos',
    pageVisitByDatacenter: 'Visita de página por centro de datos',
    topSearchTerms: 'Términos de búsqueda principales',
    signUpCount: 'Registrarse cuenta por tiempo',
    statusCodeCount: 'Código de estado de API por centro de datos',
    userAnalysis: 'Analyse des utilisateurs pour votre application Web',
    asia: 'Asia',
    northAmerica: 'Norteamérica',
  },
  'fr-FR': {
    myAccount: 'Mon Compte',
    dashboard: 'Tableau de Bord',
    search: 'Chercher',
    apiStatusByDatacenter: "Code d'état de l'API par centre de données",
    pageVisitByDatacenter: 'Page Visite par centre de données',
    topSearchTerms: 'Principaux termes de recherche',
    signUpCount: 'Inscrivez-vous compter par le temps',
    statusCodeCount: "Code d'état de l'API par centre de données",
    userAnalysis: 'Analyse des utilisateurs pour votre application Web',
    asia: 'Asia',
    northAmerica: 'Amérique du Nord',
  },
  'ko-KR': {
    myAccount: '내 계정',
    dashboard: '계기반',
    search: '검색',
    apiStatusByDatacenter: '데이터 센터 별 API 상태 코드',
    pageVisitByDatacenter: '데이터 센터 별 페이지 방문',
    topSearchTerms: '인기 검색어',
    signUpCount: '시간으로 카운트',
    statusCodeCount: '데이터 센터 별 API 상태 코드',
    userAnalysis: '웹 애플리케이션에 대한 사용자 분석',
    asia: '아시아',
    northAmerica: '북아메리카',
  },
  'jp-JP': {
    myAccount: 'マイアカウント',
    dashboard: 'ダッシュボード',
    search: '探す',
    apiStatusByDatacenter: 'データセンター別のAPIステータスコード',
    pageVisitByDatacenter: 'データセンター別ページ訪問',
    topSearchTerms: '上位の検索用語',
    signUpCount: '時間でカウントする',
    statusCodeCount: 'データセンター別のAPIステータスコード',
    userAnalysis: 'Webアプリケーションのユーザー分析',
    asia: 'アジア',
    northAmerica: '北米',
  },
}

export const translationOptions = [
  {id: 'en-US', text: 'English'},
  {id: 'es-MX', text: 'Spanish'},
  {id: 'fr-FR', text: 'French'},
  {id: 'ko-KR', text: 'Korean'},
  {id: 'jp-JP', text: 'Japanese'}
]

export const TranslationContext = React.createContext(translations['en-US']);