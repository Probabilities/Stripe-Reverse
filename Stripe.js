import crypto from 'crypto';

const DEFAULT_FULL_HASH_LIMIT = 10
const TOTAL_PARTS_LIMIT = 40
const PARTIAL_HASH_LEN = 6
const PATH_PARTS_LIMIT = 30

var h = [
    1779033703,
    -1150833019,
    1013904242,
    -1521486534,
    1359893119,
    -1694144372,
    528734635,
    1541459225,
    -876896931,
    1654270250,
    -1856437926,
    355462360,
    1731405415,
    -1900787065,
    -619958771,
    1203062813,
    -1369468586,
    -814971437,
    796084093,
    1830299338,
    -1958489001,
    -480201322,
    474308610,
    1863934769,
    -649150799,
    214214161,
    639484402,
    1477814206,
    1891102055,
    -1588511639,
    1157183029,
    1913507325,
    -1268304226,
    -902689931,
    887149614,
    1237834173,
    -2018788878,
    -1000103172,
    -331365389,
    656899949,
    1628171250,
    1948300446,
    -771913165,
    -461949548,
    153196534,
    458427541,
    -2036505790,
    -286970289,
    285697673,
    570139515,
    1135321014,
    1974073629,
    -2043654119,
    -674397837,
    134086911,
    933187903,
    1723224488,
    1984608322,
    -1531941919,
    -1017672683,
    -761910701,
    503553856,
    -2055504914,
    -1566838050
]

var k = [
    1779033703,
    -1150833019,
    1013904242,
    -1521486534,
    1359893119,
    -1694144372,
    528734635,
    1541459225,
    -876896931,
    1654270250,
    -1856437926,
    355462360,
    1731405415,
    -1900787065,
    -619958771,
    1203062813,
    -1369468586,
    -814971437,
    796084093,
    1830299338,
    -1958489001,
    -480201322,
    474308610,
    1863934769,
    -649150799,
    214214161,
    639484402,
    1477814206,
    1891102055,
    -1588511639,
    1157183029,
    1913507325,
    -1268304226,
    -902689931,
    887149614,
    1237834173,
    -2018788878,
    -1000103172,
    -331365389,
    656899949,
    1628171250,
    1948300446,
    -771913165,
    -461949548,
    153196534,
    458427541,
    -2036505790,
    -286970289,
    285697673,
    570139515,
    1135321014,
    1974073629,
    -2043654119,
    -674397837,
    134086911,
    933187903,
    1723224488,
    1984608322,
    -1531941919,
    -1017672683,
    -761910701,
    503553856,
    -2055504914,
    -1566838050
]

class Utility {
    static transformFeatureValues(e) {
        var t = {};
        return e.forEach((function (e, n) {
            var r = String.fromCharCode("a".charCodeAt(0) + n),
                _ = {
                    v: e[0],
                    t: e[1]
                };
            void 0 !== e[2] && (_.at = e[2]), t[r] = _
        })), t
    }

    static parseFeatures(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, _ = Array(r); ++n < r;) _[n] = t(e[n], n, e);
        return _
    }

    static featuresSameLine(extractedFeatures) {
        return this.parseFeatures(extractedFeatures, function (e) {
            return e[0]
        }).join(' ')
    }
}

function E(e) {
    return function (e) {
        if (Array.isArray(e)) return h(e)
    }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return h(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
    }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function randomValue() {
    try {
        return E(crypto.getRandomValues(new Uint8Array(80 / 8))).map((function (e) {
            return "0".concat(e.toString(16)).slice(-2)
        })).join("")
    } catch (e) {
        return Math.random().toString(16)
    }
}

const URL_SALT = "7766e861-8279-424d-87a1-07a6022fd8cd"

function _(e) {
    var t, n, r = e,
        _ = function (e, t) {
            return e >>> t | e << 32 - t
        },
        o = Math.pow,
        i = o(2, 32),
        c = "",
        u = [],
        a = 8 * r.length;
    h = h || [];
    var f = h;
    k = k || [];
    for (var s = k, l = s.length, y = {}, E = 2; l < 64; E += 1)
        if (!y[E]) {
            for (t = 0; t < 313; t += E) y[t] = E;
            f[l] = o(E, .5) * i | 0, s[l] = o(E, 1 / 3) * i | 0, l += 1
        } for (r += ""; r.length % 64 - 56;) r += "\0";
    for (t = 0; t < r.length; t += 1) {
        if ((n = r.charCodeAt(t)) >> 8) return "";
        u[t >> 2] |= n << (3 - t) % 4 * 8
    }
    for (u[u.length] = a / i | 0, u[u.length] = a, n = 0; n < u.length;) {
        var v = u.slice(n, n += 16),
            d = f;
        for (f = f.slice(0, 8), t = 0; t < 64; t += 1) {
            var b = v[t - 15],
                R = v[t - 2],
                p = f[0],
                m = f[4],
                O = f[7] + (_(m, 6) ^ _(m, 11) ^ _(m, 25)) + (m & f[5] ^ ~m & f[6]) + s[t] + (v[t] = t < 16 ? v[t] : v[t - 16] + (_(b, 7) ^ _(b, 18) ^ b >>> 3) + v[t - 7] + (_(R, 17) ^ _(R, 19) ^ R >>> 10) | 0);
            (f = [O + ((_(p, 2) ^ _(p, 13) ^ _(p, 22)) + (p & f[1] ^ p & f[2] ^ f[1] & f[2])) | 0].concat(f))[4] = f[4] + O | 0
        }
        for (t = 0; t < 8; t += 1) f[t] = f[t] + d[t] | 0
    }
    for (t = 0; t < 8; t += 1)
        for (n = 3; n + 1; n -= 1) {
            var L = f[t] >> 8 * n & 255;
            c += String.fromCharCode(L)
        }
    return c
}

function sha256(e) {
    return btoa(_(e)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

function sha256WithSalt(e) {
    return e ? sha256(unescape(encodeURIComponent(e)) + URL_SALT) : e
}

const isStripeAuthority = function (e) {
    return "//stripe.com" === e || "//stripe.com." === e || e.endsWith(".stripe.com") || e.endsWith(".stripe.com.")
}

const isStripeCheckoutAuthority = function (e) {
    return -1 !== ["//checkout.stripe.com", "//qa-checkout.stripe.com", "//edge-checkout.stripe.com"].indexOf(e)
}

const removeUserInfo = function (e) {
    if (e) {
        var t = e.lastIndexOf("@");
        return -1 === t ? e : e.substr(0, '//'.length) + e.substr(t + 1, e.length - t)
    }
    return e
}

class PartitionedUrl {
    constructor(t) {
        if (t) {
            var n = t.split(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/);
            this.scheme = n[1], this.authority = n[3] && removeUserInfo(n[3]), this.path = n[5], this.query = n[6], this.fragment = n[8]
        }
    }

    toString() {
        return [this.scheme, this.authority, this.path, this.query, this.fragment].filter(Boolean).join("")
    }
}

class SequentialSplitterAndHasher {
    constructor() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DEFAULT_FULL_HASH_LIMIT
        this.remainingHashes = TOTAL_PARTS_LIMIT,
            this.fullHashLimit = t
    }

    getFullHashLimit(e) {
        return "authority" === e ? TOTAL_PARTS_LIMIT : this.fullHashLimit
    }

    totalHashLimit(e) {
        switch (e) {
            case "authority":
                return TOTAL_PARTS_LIMIT
            case "path":
                return Math.max(1, Math.min(PATH_PARTS_LIMIT, this.remainingHashes))
            case "query":
            case "fragment":
                return Math.max(1, this.remainingHashes)
            default:
                return 0
        }
    }

    splitAndHash(e, t, n) {
        if ("authority" === t && e && isStripeCheckoutAuthority(e)) return e;
        if (!e) return e;
        var r = new SequentialHashWithLimit(e, this.getFullHashLimit(t), this.totalHashLimit(t));
        return e.split(n).filter(Boolean).forEach((function (e) {
            r.shouldHash() && r.replace(e)
        })), this.remainingHashes -= r.hashedCount, r.s
    }
}

class SequentialHashWithLimit {
    constructor(t, n, r) {
        this.s = t, this.cur = 0, this.hashedCount = 0, this.fullHashLimit = n, this.totalHashLimit = r
    }

    shouldHash() {
        return this.hashedCount < this.totalHashLimit
    }

    isLastHash() {
        return this.hashedCount === this.totalHashLimit - 1
    }

    shouldPartialHash() {
        return !this.isLastHash() && this.hashedCount >= this.fullHashLimit
    }

    replace(e) {
        var t = e,
            n = this.s.indexOf(e, this.cur);
        this.isLastHash() && (t = this.s.substr(n, this.s.length - n));
        var r = sha256WithSalt(t);
        this.shouldPartialHash() && (r = r.substr(0, PARTIAL_HASH_LEN)),
            this.s = this.s.substr(0, n) + r + this.s.substr(n + t.length),
            this.cur = n + r.length,
            this.hashedCount += 1
    }
}

const hashUrl = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DEFAULT_FULL_HASH_LIMIT
    var n = new PartitionedUrl(e.toString())
    var r = new SequentialSplitterAndHasher(t);

    return n.authority = r.splitAndHash(n.authority, "authority", new RegExp("[/.:]")),
        n.path = r.splitAndHash(n.path, "path", new RegExp("[/#?!&+,=]")),
        n.query = r.splitAndHash(n.query, "query", new RegExp("[/#?!&+,=]")),
        n.fragment = r.splitAndHash(n.fragment, "fragment", new RegExp("[/#?!&+,=]")),
        n
}

const hashUrlWithAuthorityCheck = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DEFAULT_FULL_HASH_LIMIT,
        n = e.authority;

    return n && isStripeCheckoutAuthority(n) ? hashUrl(e) : n && isStripeAuthority(n) ? e : hashUrl(e, t)
}

const getHashTimestampWithSalt = (e) => {
    const t = Date.now();
    const hash = sha256(e + (t + 1))
    return `${t}:${hash}`
}

function generateRandomBinaryString(length) {
    let binaryString = '';
    for (let i = 0; i < length; i++) {
        binaryString += Math.floor(Math.random() * 2).toString();
    }
    return binaryString;
}

const createInitPayload = (userAgent = null) => {
    const extractedFeatures = [
        ['true', 0],
        ['false', 0],
        ['en-GB', 0],
        ['Win32', 0],
        ['Browser PDF plug-in,HqVxgvf2j4FKFpUSJjZUxg368mTJr8Hq,application/pdf,pdf, aNlxBIr0,ECozZzCJECozZrdO,,ZYz, OToct9e,Ar89HqVpzhQQvAn,,tiZ, JavaScript portable-document-format plug in,7CgQIMl5k5kxBAAIjRnb05FKNGqdWTw3,application/x-google-chrome-pdf,pdf', 19],
        ['1920w_1032h_24d_1r', 0],
        ['1', 0],
        ['false', 0],
        ['sessionStorage-enabled, localStorage-enabled', 3],
        [generateRandomBinaryString(55), 85],
        ['', 0],
        [userAgent, 0],
        ['', 0],
        ['false', 85, 1],
        ['b723b5fba9cb9289de8b7e1e6de668fd', 83]
    ];

    const randomValueForPayload = randomValue()
    const hashedUrl = hashUrlWithAuthorityCheck(new PartitionedUrl('https://discord.com/channels/@me')).toString()
    const featuresSameLine = Utility.featuresSameLine(extractedFeatures)

    return {
        v2: 1,
        id: crypto.createHash('md5').update(featuresSameLine).digest('hex'),
        t: Math.floor(Math.random() * (350 - 200 + 1) + 200),
        tag: '4.5.43',
        src: 'js',
        a: Utility.transformFeatureValues(extractedFeatures),
        b: {
            a: hashedUrl,
            b: hashedUrl,
            c: sha256WithSalt('Discord | Billing | User Settings'), // Tab title
            d: 'NA',
            e: 'NA',
            f: false,
            g: true,
            h: true,
            i: ['location'],
            j: [],
            n: Math.floor(Math.random() * (350 - 100 + 1) + 100), // Loaded time
            u: 'discord.com',
            v: 'discord.com',
            w: getHashTimestampWithSalt(randomValueForPayload)
        },
        h: randomValueForPayload
    }
}

export default { createInitPayload }