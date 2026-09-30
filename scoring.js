/**

 * scoring.js

 * 

 * خوارزمية حساب النتيجة في اختبار "مساري"

 * 

 * الخطوات:

 * 1. حساب درجة الطالب على كل بُعد

 * 2. تحويلها إلى متجه (vector) بترتيب ثابت

 * 3. حساب Cosine Similarity مع كل تخصص

 * 4. ترتيب التخصصات حسب التشابه

 * 5. تجميعها حسب الاتجاه

 * 6. اختيار أعلى اتجاهين

 * 7. من كل اتجاه: أفضل تخصصين

 * 8. حساب مستوى الثقة

 */



import { DIMENSION_KEYS } from './dimensions.js';

import { SPECIALIZATIONS } from './specializations.js';

import { DIRECTIONS } from './directions.js';



/**

 * المرحلة 1: حساب درجة الطالب على كل بُعد

 * 

 * @param {Object} answersByDimension - كائن يحتوي على مصفوفات النقاط لكل بُعد

 *   مثال: { anal: [8, 9, 7], creative: [4, 5], ... }

 * @returns {Object} كائن بدرجة كل بُعد

 *   مثال: { anal: 8.0, creative: 4.5, ... }

 */

export function calculateDimensionScores(answersByDimension) {

  const scores = {};

  

  for (const dimKey of DIMENSION_KEYS) {

    const values = answersByDimension[dimKey] || [];

    

    if (values.length === 0) {

      // إذا لم يجب الطالب على أي سؤال من هذا البعد

      scores[dimKey] = 5; // قيمة محايدة

    } else {

      const sum = values.reduce((acc, val) => acc + val, 0);

      scores[dimKey] = sum / values.length;

    }

  }

  

  return scores;

}



/**

 * المرحلة 2: تحويل درجات الأبعاد إلى متجه بترتيب ثابت

 * 

 * @param {Object} scores - كائن درجات الأبعاد

 * @returns {Array<number>} مصفوفة من 7 أرقام

 */

export function toVector(scores) {

  return DIMENSION_KEYS.map(key => scores[key] || 0);

}



/**

 * المرحلة 3: حساب Cosine Similarity بين متجهين

 * 

 * المعادلة: (A · B) / (||A|| × ||B||)

 * النتيجة: رقم بين 0 و 1

 * 

 * @param {Array<number>} vecA

 * @param {Array<number>} vecB

 * @returns {number} معامل التشابه (0-1)

 */

export function cosineSimilarity(vecA, vecB) {

  if (vecA.length !== vecB.length) {

    throw new Error('المتجهان يجب أن يكونا بنفس الطول');

  }

  

  // الضرب النقطي (dot product)

  let dotProduct = 0;

  for (let i = 0; i < vecA.length; i++) {

    dotProduct += vecA[i] * vecB[i];

  }

  

  // طول كل متجه (magnitude)

  let magA = 0;

  let magB = 0;

  for (let i = 0; i < vecA.length; i++) {

    magA += vecA[i] * vecA[i];

    magB += vecB[i] * vecB[i];

  }

  magA = Math.sqrt(magA);

  magB = Math.sqrt(magB);

  

  // حماية من القسمة على صفر

  if (magA === 0 || magB === 0) return 0;

  

  return dotProduct / (magA * magB);

}



/**

 * معامل ارتباط بيرسون (Pearson Correlation) بين متجهين

 * = Cosine Similarity بعد طرح متوسط كل متجه منه (تمركز)

 * النتيجة: رقم بين -1 و +1

 * يحل مشكلة تقارب النتائج عندما تكون كل القيم موجبة

 * 

 * @param {Array<number>} vecA

 * @param {Array<number>} vecB

 * @returns {number} معامل الارتباط (-1 إلى +1)

 */

export function pearsonCorrelation(vecA, vecB) {

  if (vecA.length !== vecB.length) {

    throw new Error('المتجهان يجب أن يكونا بنفس الطول');

  }

  

  const n = vecA.length;

  const meanA = vecA.reduce((sum, v) => sum + v, 0) / n;

  const meanB = vecB.reduce((sum, v) => sum + v, 0) / n;

  

  let dot = 0;

  let magA = 0;

  let magB = 0;

  for (let i = 0; i < n; i++) {

    const a = vecA[i] - meanA;

    const b = vecB[i] - meanB;

    dot += a * b;

    magA += a * a;

    magB += b * b;

  }

  

  // حماية من القسمة على صفر (متجه ثابت القيم)

  if (magA === 0 || magB === 0) return 0;

  

  return dot / (Math.sqrt(magA) * Math.sqrt(magB));

}



/**

 * تحويل معامل بيرسون من المجال [-1, +1] إلى نسبة [0, 100]

 * الصيغة A: (pearson + 1) * 50

 * 

 * @param {number} pearson

 * @returns {number} نسبة بين 0 و 100

 */

export function toPercent(pearson) {

  return (pearson + 1) * 50;

}



/**

 * المرحلة 4: ترتيب كل التخصصات حسب التشابه مع الطالب

 * 

 * @param {Array<number>} studentVector

 * @returns {Array} قائمة التخصصات مع نسبة التشابه، مرتبة تنازلياً

 */

export function rankSpecializations(studentVector) {

  return SPECIALIZATIONS

    .map(spec => ({

      ...spec,

      score: toPercent(pearsonCorrelation(studentVector, spec.fingerprint))

    }))

    .sort((a, b) => b.score - a.score);

}



/**

 * المرحلة 5: تجميع التخصصات حسب الاتجاه

 * 

 * @param {Array} ranked - التخصصات المرتبة

 * @returns {Object} كائن: كل مفتاح اتجاه → قائمة تخصصاته المرتبة

 */

export function groupByDirection(ranked) {

  const groups = {};

  

  for (const spec of ranked) {

    if (!groups[spec.direction]) {

      groups[spec.direction] = [];

    }

    groups[spec.direction].push(spec);

  }

  

  return groups;

}



/**

 * المرحلة 6: ترتيب الاتجاهات حسب قوتها

 * 

 * قوة الاتجاه = أعلى تخصص فيه

 * 

 * @param {Object} groups - التخصصات مجمعة حسب الاتجاه

 * @returns {Array} قائمة الاتجاهات مرتبة تنازلياً

 */

export function rankDirections(groups) {

  return Object.entries(groups)

    .map(([directionKey, specs]) => ({

      direction: directionKey,

      info: DIRECTIONS[directionKey],

      topScore: specs[0].score,

      top2: specs.slice(0, 2) // أفضل تخصصين في هذا الاتجاه

    }))

    .sort((a, b) => b.topScore - a.topScore);

}



/**

 * المرحلة 7: حساب مستوى الثقة بناءً على الفجوة

 * 

 * @param {number} gap - الفجوة بين الاتجاه الأول والثاني (نسبة مئوية)

 * @returns {Object} كائن يحتوي على المستوى والرسالة العربية

 */

export function calculateConfidence(gap) {

  if (gap >= 12) {

    return {

      level: 'high',

      label: 'عالية',

      message: 'نتيجتك واضحة نسبياً — الاتجاه الأول يبرز بوضوح عن الاتجاه الثاني.'

    };

  } else if (gap >= 7) {

    return {

      level: 'good',

      label: 'جيدة',

      message: 'نتيجتك واضحة نسبياً — يظهر فيها تفوق لاتجاه مع وجود تداخل بسيط مع اتجاه آخر.'

    };

  } else if (gap >= 3) {

    return {

      level: 'close',

      label: 'متقاربة',

      message: 'نتيجتك متقاربة بين اتجاهين — يُفضّل أن تستكشف كليهما بعمق قبل الاختيار.'

    };

  } else {

    return {

      level: 'weak',

      label: 'ضعيفة',

      message: 'نتيجتك متقاربة جداً بين أكثر من اتجاه — قد يكون من المفيد إعادة الاختبار لاحقاً.'

    };

  }

}



/**

 * المرحلة النهائية: حساب النتيجة الكاملة

 * 

 * @param {Array<number>} studentVector - متجه الطالب

 * @returns {Object} النتيجة الكاملة:

 *   - first: الاتجاه الأول (مع تخصصيه)

 *   - second: الاتجاه الثاني (مع تخصصيه)

 *   - confidence: مستوى الثقة

 *   - gap: الفجوة

 *   - studentVector: متجه الطالب

 *   - allRanked: كل التخصصات مرتّبة

 */

export function computeResult(studentVector) {

  // ترتيب التخصصات

  const ranked = rankSpecializations(studentVector);

  

  // تجميعها حسب الاتجاه

  const groups = groupByDirection(ranked);

  

  // ترتيب الاتجاهات

  const directionsRanked = rankDirections(groups);

  

  // أعلى اتجاهين

  const first = directionsRanked[0];

  const second = directionsRanked[1];

  

  // الفجوة (تُقرَّب أولاً، ثم يُحسب المستوى من القيمة المقرَّبة لضمان تناسق العرض)

  const rawGap = first.topScore - second.topScore;

  const gap = Math.round(rawGap * 10) / 10;

  

  // مستوى الثقة

  const confidence = calculateConfidence(gap);

  

  return {

    first,

    second,

    confidence,

    gap, // القيمة المقرَّبة

    studentVector,

    allRanked: ranked

  };

}