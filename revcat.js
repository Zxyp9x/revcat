/*************************************
Zxyp9x(*_*")
Project Name: revenuecat Collection (This collection only includes software version 10.5 and later)
Usage Statement: ⚠️ For reference only, Prohibited from reprinting and selling!

**************************************

[rewrite_local]
# Modify
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Zxyp9x/Revcat/main/revcat.js
# Clean
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/Zxyp9x/Revcat/main/revcat.js


[mitm]
hostname = api.revenuecat.com

************************************/

const Q = {};
const Q1 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Q.headers = $request.headers;
} else if (Q1 && Q1.subscriber) {
  Q1.subscriber.subscriptions = Q1.subscriber.subscriptions || {};
  Q1.subscriber.entitlements = Q1.subscriber.entitlements || {};
  var headers = {};
  for (var key in $request.headers) {
    const reg = /^[a-z]+$/;
    if (key === "User-Agent" && !reg.test(key)) {
      var lowerkey = key.toLowerCase();
      $request.headers[lowerkey] = $request.headers[key];
      delete $request.headers[key];
    }
  }
  var UA = $request.headers['user-agent'];
  const app = '1';
  const UAMappings = {
    'XBListeningEnglish': { name: 'enPro', id: 'com.shenming.newconceptvip.year'},
    'FretTrainer': { name: 'pro', id: 'frettrainer.sub.yearly.pro'}, //5.7
    '鲸落文案': { name: 'vip', id: 'jl_year'}, //2024.5.6
    'PeachTree': { name: 'GoldMember', id: 'LifetimeGoldMembership'}, //2024.5.5
    'No Fusion': { name: 'LivePhoto', id: 'com.grey.livephoto.reference.price'}, //2024.5.5
    'mark_cup': { name: 'premium', id: '202403180021'}, //20.24.5.4
    'VOX': { name: 'VOX Premium', id: 'com.coppertino.VoxMobile.AU.Loop1_v8'}, //20.24.4.22
    'PDF Viewer': { name: 'sub.pro', id: 'com.pspdfkit.viewer.sub.pro.yearly'}, //2024.3.21
    'Text Workflow': { name: 'pro', id: 'tw_99_1m'}, //2024.3.2
    'FaceMa': { name: 'Pro access', id: 'Pro_Lifetime'}, //Facemo
    'MadeYu': { name: 'pro_plus', id: 'my_549_1m_400'}, //
    'clica': { name: 'pro', id: 'clica.vip.year'}, //
    'FoJiCam': { name: 'Pro', id: 'com.uzero.cn.fojicam.life2'}, //2024.4.9
    'ShellBoxKit': { name: 'pro', id: 'ShellBoxKit.Lifetime'}, //2024.4.9

    'StarDiary': { name: 'pro', id: 'com.gsdyx.StarDiary.nonConsumable.forever'},
    'CountDuck': { name: 'premium', id: 'Lifetime'},
    'StarFocus': { name: 'pro', id: 'com.gsdyx.StarFocus.nonConsumable.forever'},
    'Context_iOS': { name: 'pro', id: 'ctx_3y_sspai_preorder_angel'},
    'Vision': { name: 'promo_3.0', id: 'vis_lifetime_3.0_promo'},
    'Structured': { name: 'pro', id: 'today.structured.pro'},
    'Cookie': { name: 'allaccess', id: 'app.ft.Bookkeeping.lifetime'},
    'CountDuck': { name: 'premium', id: 'Lifetime'},
    'HTTPBot': { name: 'Pro', id: 'httpbot_1499_1y_1w0'},
    'MyPianist': { name: 'pro', id: 'com.collaparte.mypianist.pro.gift.twelve'},
    'TouchRetouchBasic': { name: 'premium', id: 'tr5_yearlysubsc_30_and_20_dlrs'}, //end of year subscription
    'Free': { name: 'pro', id: 'appspree_pro_lifetime'},
    'Version': { name: 'pro', id: 'httpbot_1499_1y_1w0'},
    'wordswag': { name: 'pro', id: 'Pro_Launch_Monthly'},
    'BlackBox': { name: 'plus', id: 'app.filmnoir.appstore.purchases.lifetime'},
    'LongmaoApp': { name: 'pro', id: 'douyina_forever_01'},
    'AnkiPro': { name: 'Premium', id: 'com.ankipro.app.lifetime'},
    'AIChat': { name: 'AI Plus', id: 'aiplus_yearly'},
    'SmartAIChat': { name: 'Premium', id: 'sc_3999_1y'},
    'AIKeyboard': { name: 'plus_keyboard', id: 'aiplus_keyboard_yearly'},
    'TextMask': { name: 'pro', id: 'tm_lifetime'},
    'MusicMate': { name: 'premium', id: 'mm_lifetime_68_premium'},
    'ImagineAI': { name: 'pro', id: 'artistai.yearly.1'},
    'VoiceAI': { name: 'Special Offer', id: 'voiceannualspecial'},
    'Langster': { name: 'Premium', id: 'com.langster.universal.lifetime'},
    'Chat练口语': { name: 'Premium', id: 'com.tech.AiSpeak.All'},
    'Readle': { name: 'Premium', id: 'com.hello.german.year