// import { deepCopy } from "./util";

// /**
//  * Units
//  */

// export type ConversionTableType<Units extends string> = {
//   [fromUnit in Units]: { [toUnit in Units]: number }
// };

// export class ConversionTable<Units extends string> {
//   public static new<Units extends string>(baseUnit: Units) {
//     return new this<Units>({
//       [baseUnit]: {
//         [baseUnit]: 1,
//       },
//     } as ConversionTableType<Units>);
//   }

//   public static fromTableWithNewUnit<
//     OldUnits extends string,
//     NewUnit extends string
//   >(
//     oldTable: ConversionTableType<OldUnits>,
//     newUnit: NewUnit,
//     equivalentValue: number,
//     equivalentUnit: OldUnits,
//   ) {
//     // Construct the new table from the old table and add the new unit
//     const newTable: ConversionTableType<OldUnits | NewUnit> = deepCopy(
//       oldTable,
//     ) as any;
//     newTable[newUnit] = { [newUnit]: 1 } as any;

//     // Fill the "blank" entries of the table
//     const oldUnits = Object.keys(oldTable) as OldUnits[];
//     for (const oldUnit of oldUnits) {
//       const newToOldConversionFactor =
//         equivalentValue * oldTable[equivalentUnit][oldUnit];
//       newTable[newUnit][oldUnit] = newToOldConversionFactor;
//       newTable[oldUnit][newUnit] = 1 / newToOldConversionFactor;
//     }

//     return new this(newTable);
//   }

//   public readonly table: ConversionTableType<Units>;
//   constructor(table: ConversionTableType<Units>) {
//     this.table = table;
//   }

//   public addUnit<NewUnit extends string>(
//     newUnit: NewUnit,
//     equivalentValue: number,
//     equivalentUnit: Units,
//   ) {
//     return ConversionTable.fromTableWithNewUnit(
//       this.table,
//       newUnit,
//       equivalentValue,
//       equivalentUnit,
//     );
//   }
// }

// const lengthConversionTable = ConversionTable.new("cm")
//   .addUnit("mm", 0.1, "cm")
//   .addUnit("in", 2.54, "cm")
//   .addUnit("pt", 1 / 72, "in")
//   .addUnit("px", 1 / 96, "in")
//   .addUnit("pc", 12, "pt");

// // tslint:disable-next-line:max-classes-per-file
// export class Unit<Dimension extends string, Units extends string> {
//   public static setDimensionAndConversionTable<
//     Dimension extends string,
//     Units extends string
//   >(dimension: Dimension, conversionTable: ConversionTableType<Units>) {
//     // tslint:disable-next-line:max-classes-per-file
//     const cls = class extends Unit<Dimension, Units> {
//       constructor(value: number, unit: Units) {
//         super(dimension, conversionTable, value, unit);
//       }
//     };
//   }
//   public readonly value: number;
//   public readonly unit: Units;
//   public readonly dimension: Dimension;
//   public readonly conversionTable: ConversionTableType<Units>;

//   public to = (() => {
//     const f = (unit: Units) => {
//       return new Unit(
//         this.dimension,
//         this.conversionTable,
//         this.value * this.conversionTable[this.unit][unit],
//         unit,
//       );
//     };
//   })();

//   constructor(
//     dimension: Dimension,
//     conversionTable: ConversionTableType<Units>,
//     value: number,
//     unit: Units,
//   ) {
//     this.dimension = dimension;
//     this.value = value;
//     this.unit = unit;
//     this.conversionTable = conversionTable;
//   }

//   public toString() {
//     return `${this.value}${this.unit}`;
//   }
// }

export type Unit = (n: number) => string;

export const Unit = (unit: string) => (n: number) => `${n}${unit}`;
export const TransformedUnit = (
  valueTransform: (n: number) => number,
  unit: Unit,
) => (n: number) => unit(valueTransform(n));

// Absolute lengths

/**
 * CSS Pixel length unit
 *
 * 1/96 of an inch, not necessarily equal to a device pixel
 */
export const px = Unit("px");
/**
 * Point (pt) length unit
 *
 * 1pt = 1/72 of an inch
 */
export const pt = Unit("pt");
/**
 * Point (pc) length unit
 *
 * 1 pica = 12pt = 16px
 */
export const pc = Unit("pc");
/**
 * 1in = 72in = 96pt = 2.54cm = 25.4mm
 */
export const inch = Unit("in");
/**
 * 1in = 2.54cm
 */
export const cm = Unit("cm");
/**
 * 1cm = 10mm
 */
export const mm = Unit("mm");

// Relative lengths

/**
 * Relative to font-size of the root element
 */
export const rem = Unit("rem");
/**
 * Relative to the font-size of the element (2em means 2 times the size of the current font)
 */
export const em = Unit("em");
/**
 * Relative to the x-height of the current font (rarely used)
 */
export const ex = Unit("ex");
/**
 * Relative to the width of the "0" glyph used to render the font
 */
export const ch = Unit("ch");

/**
 * Converts the number directly to percent, i.e. simplePercentage(100) = 100%
 */
export const simplePercentage = Unit("%");
/**
 * Converts the number mathematically corret to percent, i.e. percentage(1) = 100%
 */
export const percentage = TransformedUnit((n) => n * 100, simplePercentage);

/**
 * Relative to 1% of the width of the viewport*
 * Viewport = the browser window size. If the viewport is 48cm wide, 1vw = 0.48cm.
 */
export const vw = Unit("vw");
/**
 * Relative to 1% of the height of the viewport*
 * Viewport = the browser window size. If the viewport is 27cm tall, 1vh = 0.27cm.
 */
export const vh = Unit("vh");
/**
 * Relative to 1% of the viewport's smaller dimenstion*
 * Viewport = the browser window size. If the viewport is 48cm wide and 27cm tall, 1vmin = 0.27cm.
 */
export const vmin = Unit("vmin");
/**
 * Relative to 1% of the viewport's larger dimenstion*
 * Viewport = the browser window size. If the viewport is 48cm wide and 27cm tall, 1vmax = 0.48cm.
 */
export const vmax = Unit("vmax");

/**
 * Unit of free space in a grid
 */
export const fr = Unit("fr");

// Angle units

export const deg = Unit("deg");
export const grad = Unit("grad");
export const rad = Unit("rad");
export const turns = Unit("turn");

// Time units

export const s = Unit("s");
export const ms = Unit("ms");
export const µs = TransformedUnit((n) => n / 1000, ms);
export const min = TransformedUnit((n) => n * 60, s);
export const hours = TransformedUnit((n) => n * 60, min);

// Frequency units

export const hz = Unit("Hz");
export const kHz = Unit("kHz");
