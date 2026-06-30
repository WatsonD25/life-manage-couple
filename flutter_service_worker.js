'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "503add5afadf39476c64f212d537e3d3",
".git/config": "bca361e659d8c7b9fcbc1609a0f57d68",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b2c9dc45139151ce2b0f105ccafad85b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dcafdc12b8be1068d07b3a3a0631e035",
".git/logs/refs/heads/gh-pages": "dcafdc12b8be1068d07b3a3a0631e035",
".git/logs/refs/remotes/origin/gh-pages": "dbd1307c073022ee98bc731311595efc",
".git/objects/00/d1902715eb9e7dd6fe84d09cdeea5a31a6edff": "0f7c31c93151cb4315c724063f9dea71",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/05/ff378caf897d82151eb9b3523b82f67f102a43": "763847f3373127a5fc9000b3dca51bf8",
".git/objects/09/50c8edde0b7b7aeb26d9a7443f05253c8de565": "f2e1ee2cc32667fdf28254526821f4ae",
".git/objects/0a/922c6764e265853715c2a66731a866ab07aef0": "6ae68364de24b65bb4016782e2155584",
".git/objects/0c/1cc83326443924c2d630b65793d3372de9a75b": "b615e8d82978e00b3a1a28a8274558a5",
".git/objects/0d/02f6c5b1601245464cee9ca9b578cfe526f931": "07ce1726d5eb2cca7b1530ae951b6a7f",
".git/objects/0d/05b5a75b554c396ea058437fcf1211f8b730a5": "13e1dec2c1cf689cfbcd9742799c006d",
".git/objects/0e/0f9c3e77e25a635b3551ab2e7558b1fb9f0792": "a83c9ad8ec501fcfed749cd86b910f2d",
".git/objects/0e/53407b24aa4a23a9989dae403ba275e5fea6a7": "bb500397831aff6ccdae640475cb9b6b",
".git/objects/0f/b80fe4691516b1fb85f3eae6ec533aa99634d5": "2c9c2fe916d97caa1fff23f547e484c5",
".git/objects/12/e522186b1c11f6ecf715f54318954c158264ff": "b67d250a547f32195250079e3577eec4",
".git/objects/1e/1779618166124dede67b1959eb3dbddc0b2dc3": "7db98b8768faba898a728aab42c02f42",
".git/objects/1e/82a1ea6ac066bc8618cc0de91ccbcefb5d9b0c": "457df6a24c1ffb782d5905aa9f032514",
".git/objects/1e/f74224ba23077ed4849e6924d07b72d9d8c939": "b7f4a20dd4dfe4897b0a54714c2938d1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/40a4291d839b7b845221eb567281e860a058e9": "00b649eb5a45d64618b053df924d2c62",
".git/objects/24/a72004fea55bf5d3fdee891f9023227aaac82d": "da7cddae9cc114e315b0a0cb9643e686",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/c15458e7430bbbbe614a4d73ec1626e9e68c06": "038132d535d3f552ab9895de120e4f24",
".git/objects/28/f4aefea8c53dc52a58b2eb098c8da3754f927e": "ec6a9761278326d9882d63bf976710cb",
".git/objects/2a/b3fe42e4656b5d5f5753685239ad7800105a6e": "8d5bee45a677762e4377051391668a87",
".git/objects/2f/cd252ee9c8e375bddd11ce025a0a5d05cd67fe": "454ba521637946df5f9512a081ce6687",
".git/objects/30/bc657979defd3255cfefe6f06d5cf3bdfd11b3": "aa2d1b487a8952a37f67efedde692400",
".git/objects/30/c8aa2ec5136e3d5a3f43c38415214d42a00f7c": "eb56b2f258f60eaa350280f3f4996305",
".git/objects/34/8a102dafab37da1a66e3889c1215facf299eb4": "15f09f5aea710b80c8cf97b39d77b410",
".git/objects/36/3de1fb09c828bac92efad922b8f2956a452294": "4bc13023d2cd77d4bd5b03c71719cf37",
".git/objects/39/d852c053b68f360801bd1402092af1d0bcfff3": "00e5bfcd55b551aebbf44bb90740c6cd",
".git/objects/3a/6a059560a53228d26615bdef9d4d4b7c4daad1": "b68a36f92b1aff288db8bc19355c854f",
".git/objects/40/f7b4ea2a68443569b20ec2462905853795ba88": "9bf2ed1aedba1cab3c92e47e89e54f47",
".git/objects/43/7741fbab2a4810cebf64bc9ce6eaa391421bfc": "534a62ec3b7d5804efcbe0ff35dc6ef1",
".git/objects/43/d237735b461267080a03bb0789a5d85763f624": "77625551db985dde4fda6bc3119e1131",
".git/objects/44/3f8eca9dfb2698b2a290e20a8dd70e1615c646": "c7741ad3f67d12b9cda52cfbfcbf5178",
".git/objects/45/7eab8ed284c903fa90098b13b3454c191a93ec": "c083d80b14e04a8913fd26f1829f8947",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/7a537f01e4b45b1daffcf3564c811afb840e2e": "3e40da869726bab5479ed16e08e23a23",
".git/objects/49/1db405588ab3a522ed96067fcad9ba49fca4f5": "c1f63bbfc48df7c815890a6dd4900b7e",
".git/objects/4b/3f979937fccea7246cded09c965f1065e7140f": "d045f986ba4644376349ef9156f97e37",
".git/objects/4b/9fa997d54dc1a9d0f61c5e16f81638f9c290c0": "6bbb57f190183a951ef1d178963a40d1",
".git/objects/58/30bc909347766c39570bd8f1d3d48711eee66f": "e70f8476dbbc503ebd7ad08c84a2619c",
".git/objects/59/369426bec5e628fd50c0aa3842b26a40eebef1": "113bb152c2fc678bc168792c7d09ef3b",
".git/objects/5b/99728d8cff457e2bd5abefafdb101ac59602d4": "24857739dd77e09e21e171f931986b43",
".git/objects/5d/2126c13e206b8d048e6cba99a7da19291ce7f6": "e68d6e5e50a4f88502773ea6027a7e69",
".git/objects/62/845e8a97c00a619e7a0148e836f3f8a0aec15a": "56877db6ac4c169d5dd4e1ca63235ebc",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/2cc094627db396439c93711f492aa21b23d2e8": "091e85a0b4cd2bbcb99ef0eb36900314",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/65e488679ea4d701cf205eb3d091f6df396c9c": "6c96bdb6468eb7ea2a4c810a16ecd4a6",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6f/9f8a9167dfb94fd0af1361fa9353e24d5e4aca": "eaca054c48929d34e78f2b52a7fcd0b5",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/9bb5dd5b41c519f1e1b7fc055ce5cae6bccd73": "9fc6723b14f365c22c8583a3bdd5579b",
".git/objects/7e/3d1c8c8273b1a135f6cca700369064665879b7": "0441a25c16fe47a579819f2320f5a556",
".git/objects/83/4d6f9eb1ca9cf70c8cbfd0003ab66f3dd5bd38": "fbaccaba56fa2e1578b01b5185711afa",
".git/objects/83/94a43bde62c83021d81a0ce856c0382b4b1dcc": "5f12c81e17081a47aa84fcf08473ed6e",
".git/objects/84/9b3922542b7bf673566a5fe41ab0c5f37c25b5": "8eaff0ce0870b742a238c97960ebf966",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8a/fbe94cf5fdfb9f3810fe371d007fa67559736e": "83d08930c605b3939aaa8fa78f22ed3e",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/93/179b6536c8636b2ed59da56ad5dc24b94aaed0": "078538593514ae0eb56b85f2ca4e79e9",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/1dc0ed4ea1d20cf22dacaf5d70007dc6a80ee7": "e9e0ec749e3609b4745cfbad0b2ddb75",
".git/objects/9d/9a6cc41cc721c79461c258506eb3936dccfb21": "d4d937e5203c4df49aa78648ed1abb83",
".git/objects/9d/a98b56a0bc9eedbc819aee4bef66060245d9b0": "a73467a4648dc0faa724c04c62e04227",
".git/objects/9d/f6dd45bb1cacbb28df233505d168537dba9080": "97983a9fdf8ec4bda245bbb5c075f36a",
".git/objects/a3/aab20e6b6c29df0cb6f14f7ce04c9ccf4c84c6": "7d2382355ed4893bd6838d49af734928",
".git/objects/a3/fe94ed610f5be37a668cb299aa565224ceabf1": "0d533d20b189f27d0b8bc2fb54cf3526",
".git/objects/a7/c9c10944ceeffb61ec761ca6435ab11ee4cb84": "5251ba4b72349d1705ceb7b407bc1635",
".git/objects/a9/edb873e1ecc5b79bb481bd608577063ecce8e9": "2afbed40aa765c12eafb26d2871f742f",
".git/objects/aa/92eeecfc9135f95558c75c66a3cfb95a570a3c": "6efd416cb10b26733a8997be43f3fb34",
".git/objects/ae/9ed19c6bd8223e277f4987edae2742c5c8bd8d": "af61481f5a01e1da23e4d96b3d736ff2",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/98692ca81e6e38a9947602317e7013a8f483cb": "91c5ef7885d6943d9dc4e012a97442f8",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b6/f87ca2591fe1aed7a9230b0c645f04b664ba74": "c3a1fa943a2a297a976035a8b9df5948",
".git/objects/b8/15ec08f50b9342147da9ca8a0ad661870eefe9": "2ea20ba5d55e90997b56bf45f9cb1a0c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/4e5b3876eadc0868aa85fa5f39190974591499": "a4e2f34724601a39a9d093655ac1475e",
".git/objects/be/11fc790b9bda38ac1ef6f08d5f02e3f3fd1268": "d2c3bbbb6954e9ae9cd3d180d1163917",
".git/objects/be/6403f394946cedf5532164882471c0d401d47c": "eaebc89af53873d93b0de455b303ccaf",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/8b309a5847fc83f31a6b66c89aefd6ee83d857": "cccfb868ec1709048924c17dabce91ae",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/51bbfb33e652da6d6016889ca9089c6faa4635": "71185a8fee9682f3885d39fcef29ec57",
".git/objects/c6/a9ff1bb0541ab1a820fac8e0f0740b7e03e01f": "e840cf98b3ae3e07ab43366e47e866f5",
".git/objects/d3/cca21253c2e803e0bb7d600c222ad891b93b8a": "891d2dc1133deaa3a1dee03efd6aa198",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3860390becc3dbbd9d4403148323602057a368": "cc3951d0ab4d587d55f9958083f38cc5",
".git/objects/d5/0c85331af2bdb74b615aca78a963670591b6f5": "7cf070540786d60b0c4636b2939ebaf4",
".git/objects/d6/9a885479c29bfc6e7c67de659d585d38a39cc6": "b52a0b0e808d56974d7a27126856952e",
".git/objects/d9/e40c85cb9a227bb037a0ccfbc1e54af0d23b42": "680977e293e9931598e9d2d4109a1d6a",
".git/objects/dd/986e5a78a95dfc539efc97907cac8f02e06e34": "5b34b4304e2c4f41a1189abde8ef1a14",
".git/objects/e4/23a85ff679c72598e30cf28dc889f1102af252": "d62d960044d6dec9a3c3a664d4684a47",
".git/objects/e5/39cc6e7fb03cbe47cc107b008af765c0908a94": "7121fd2854461ff17dc66bdcd0657170",
".git/objects/e7/ac34966dd8b01bb09fbd86ddc6aca833867c68": "4bf76c5f796a22645ef76496e588bcb0",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/52c2ac4a0913417ee4c093fdb9884de077b577": "3f66686524e1427b3945497aced2e195",
".git/objects/ec/62074a0be9a5e21911c4cb11e48116527451b3": "46d57860ca57c44fe4889ad7f4d66065",
".git/objects/ed/c33dcf803a1c13ca4220918c141e97c795df26": "cd71de07e38f35fa3106370079c04e8f",
".git/objects/ed/db8d569fe773d906455ccffffff9085840265e": "eda6ac21d676fa0ff4d6272e36ed8d4b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/0b59fc7ed302176fa07720d9067e6d2bcbf6c0": "f4f98a2e682260529b102d27c27b9027",
".git/objects/f4/632ef73bb34bad27a39a84015c1e944d207301": "f4b1ddeb996e342f2a451175090a3121",
".git/objects/f8/f5be3031f389bf649866d7a85d5fdadcbbcfc7": "67e2bf356d639b03ce499af2bb22b12c",
".git/refs/heads/gh-pages": "522cefb46c0c7af3973cf2ab4e4c3f33",
".git/refs/remotes/origin/gh-pages": "522cefb46c0c7af3973cf2ab4e4c3f33",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ade232b70ce8f3338ad4fbb71eef3d35",
"assets/NOTICES": "d2223534a1573aaaae8b5f489170f9ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "ed97197e498b36e8d0a39dd692c4b61f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "62d5aa7c7906b36a383fe850079e2230",
"icons/Icon-192.png": "ed97197e498b36e8d0a39dd692c4b61f",
"icons/Icon-512.png": "ed97197e498b36e8d0a39dd692c4b61f",
"icons/Icon-maskable-192.png": "ed97197e498b36e8d0a39dd692c4b61f",
"icons/Icon-maskable-512.png": "ed97197e498b36e8d0a39dd692c4b61f",
"index.html": "fbd3348a1e0bed80a6343a292bbe2d78",
"/": "fbd3348a1e0bed80a6343a292bbe2d78",
"isar.js": "03d1dd4c72a807815d62a9d2f23517cf",
"main.dart.js": "8d09b16d2cc79e267fbe7bb3c7874884",
"manifest.json": "25418b7099f89c08974b10a1f3717994",
"version.json": "f4ee8b903b5ee946a9e830d9a61b56a7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
