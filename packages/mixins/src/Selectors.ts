/**
 * CSS selectors
 */

// tslint:disable:unified-signatures
// tslint:disable:no-namespace
// tslint:disable:no-shadowed-variable

namespace Selectors {
  /** No selector / default styles */
  export const This = "&";

  /** All */
  export const All = "*";

  /** Joins up CSS selectors, so that any of them has to match */
  export function Or(first: string, ...rest: string[]) {
    return [first, ...rest].join(", ");
  }

  /** Joins up CSS selectors which all need to match */
  export function And(first: string, ...rest: string[]) {
    return [first, ...rest].join("");
  }

  /** Specific HTML element */
  export function Selector(sel: string) {
    return sel;
  }

  /** Element with ID */
  export function Id(id: string) {
    return `#${id}`;
  }

  /** Element with class */
  export function Class(cls: string) {
    return `.${cls}`;
  }

  /** Children */
  export function Children(): string;
  export function Children(children: string): string;
  export function Children(parent: string, children: string): string;
  export function Children(...args: [] | [string] | [string, string]): string {
    let parent: string;
    let children: string;
    if (args.length === 0) {
      parent = This;
      children = All;
    } else if (args.length === 1) {
      parent = This;
      children = args[0]!;
    } else {
      parent = args[0]!;
      children = args[1]!;
    }
    return `${parent} ${children}`;
  }

  /** Direct Children */
  export function DirectChildren(): string;
  export function DirectChildren(children: string): string;
  export function DirectChildren(parent: string, children: string): string;
  export function DirectChildren(...args: [] | [string] | [string, string]): string {
    let parent: string;
    let children: string;
    if (args.length === 0) {
      parent = This;
      children = All;
    } else if (args.length === 1) {
      parent = This;
      children = args[0]!;
    } else {
      parent = args[0]!;
      children = args[1]!;
    }
    return `${parent} > ${children}`;
  }

  export function ImmediatelyFollowing(): string;
  export function ImmediatelyFollowing(followingElement: string): string;
  export function ImmediatelyFollowing(precedingElement: string, followingElement: string): string;
  export function ImmediatelyFollowing(...args: [] | [string] | [string, string]): string {
    let precedingElement: string;
    let followingElement: string;
    if (args.length === 0) {
      precedingElement = This;
      followingElement = All;
    } else if (args.length === 1) {
      precedingElement = This;
      followingElement = args[0]!;
    } else {
      precedingElement = args[0]!;
      followingElement = args[1]!;
    }
    return `${precedingElement} + ${followingElement}`;
  }

  export function Following(): string;
  export function Following(followingElement: string): string;
  export function Following(precedingElement: string, followingElement: string): string;
  export function Following(...args: [] | [string] | [string, string]): string {
    let precedingElement: string;
    let followingElement: string;
    if (args.length === 0) {
      precedingElement = This;
      followingElement = All;
    } else if (args.length === 1) {
      precedingElement = This;
      followingElement = args[0]!;
    } else {
      precedingElement = args[0]!;
      followingElement = args[1]!;
    }
    return `${precedingElement} ~ ${followingElement}`;
  }

  export function HasAttribute(name: string) {
    return `[${name}]`;
  }

  export function HasAttributeWithValue(name: string, value: string) {
    return `[${name}=${value}]`;
  }

  export function HasAttributeContainingWord(name: string, containedWord: string) {
    return `[${name}~=${containedWord}]`;
  }

  export function HasAttributeContaining(name: string, containedValue: string) {
    return `[${name}*="${containedValue}"]`;
  }

  export function HasAttributeStartingWithWord(name: string, start: string) {
    return `[${name}|=${start}]`;
  }

  export function HasAttributeStartingWith(name: string, start: string) {
    return `[${name}^="${start}"]`;
  }

  export function HasAttributeEndingWith(name: string, end: string) {
    return `[${name}$="${end}"]`;
  }

  export namespace Pseudo {
    export namespace Prefixed {
      export const enum Moz {
        Dir = ":-moz-dir",
        AnyLink = ":-moz-any-link",
        FullScreen = ":-moz-full-screen",
        OnlyWhitespace = ":-moz-only-whitespace",
        Placeholder = ":-moz-placeholder",
        ReadOnly = ":-moz-read-only",
        ReadWrite = ":-moz-read-write",

        Placeholder2 = "::-moz-placeholder",
        ProgressBar = "::-moz-progress-bar",
        RangeProgress = "::-moz-range-progress",
        RangeThumb = "::-moz-range-thumb",
        RangeTrack = "::-moz-range-track",
        Selection = "::-moz-selection",
      }

      export const enum Webkit {
        AnyLink = ":-webkit-any-link",
        FullScreen = ":-webkit-full-screen",

        Backdrop = "::-webkit-backdrop",
        InputPlaceholder = "::-webkit-input-placeholder",
        ProgressBar = "::-webkit-progress-bar",
        ProgressInnerValue = "::-webkit-progress-inner-value",
        ProgressValue = "::-webkit-progress-value",
        SliderRunnableTrack = "::-webkit-slider-runnable-track",
        SliderThumb = "::-webkit-slider-thumb",
      }

      export const enum MS {
        Fullscreen = ":-ms-fullscreen",
        InputPlaceholder = ":-ms-input-placeholder",

        Backdrop = "::-ms-backdrop",
        Browse = "::-ms-browse",
        Check = "::-ms-check",
        Clear = "::-ms-clear",
        Fill = "::-ms-fill",
        FillLower = "::-ms-fill-lower",
        FillUpper = "::-ms-fill-upper",
        Reveal = "::-ms-reveal",
        Thumb = "::-ms-thumb",
        TicksAfter = "::-ms-ticks-after",
        TicksBefore = "::-ms-ticks-before",
        Tooltip = "::-ms-tooltip",
        Track = "::-ms-track",
        Value = "::-ms-value",
      }
    }

    export const enum Static {
      // Double colon
      After2 = "::after",
      Backdrop = "::backdrop",
      Before2 = "::before",
      Colon2 = "::cue",
      FirstLetter2 = "::first-letter",
      FirstLine2 = "::first-line",
      GrammarError = "::grammar-error",
      Placeholder = "::placeholder",
      Selection = "::selection",
      Slotted2 = "::slotted",
      SpellingError = "::spelling-error",

      // Single colon
      Active = ":active",
      After = ":after",
      AnyLink = ":any-link",
      Before = ":before",
      Blank = ":blank",
      Checked = ":checked",
      Default = ":default",
      Defined = ":defined",
      Disabled = ":disabled",
      Empty = ":empty",
      Enabled = ":enabled",
      First = ":first",
      FirstChild = ":first-child",
      FirstLetter = ":first-letter",
      FirstLine = ":first-line",
      FirstOfType = ":first-of-type",
      Focus = ":focus",
      FocusWithin = ":focus-within",
      Fullscreen = ":fullscreen",
      Hover = ":hover",
      InRange = ":in-range",
      Indeterminate = ":indeterminate",
      Invalid = ":invalid",
      LastChild = ":last-child",
      LastOfType = ":last-of-type",
      Left = ":left",
      Link = ":link",
      OnlyChild = ":only-child",
      OnlyOfType = ":only-of-type",
      Optional = ":optional",
      OutOfRange = ":out-of-range",
      PlaceholderShown = ":placeholder-shown",
      ReadOnly = ":read-only",
      ReadWrite = ":read-write",
      Required = ":required",
      Right = ":right",
      Root = ":root",
      Scope = ":scope",
      Target = ":target",
      Valid = ":valid",
      Visited = ":visited",
    }

    // Dynamic pseudo selectors
    export namespace Dynamic {
      export const Dir = (dir: "ltr" | "rtl") => `:dir(${dir})`;
      export const Has = (selector: string) => `:has(${selector})`;
      export const Host = (selector: string) => `:host(${selector})`;
      export const HostContext = (selector: string) => `:host-context(${selector})`;
      export const Is = (selector: string) => `:is(${selector})`;
      export const Lang = (language: string) => `:lang(${language})`;
      export const Not = (selector: string) => `:not(${selector})`;
      export const NthChild = (n: number) => `:nth-child${n}`;
      export const NthLastChild = (n: number) => `:nth-last-child(${n})`;
      export const NthLastOfType = (n: number) => `:nth-last-of-type(${n})`;
      export const NthOfType = (n: number) => `:nth-of-type(${n})`;
      export const Where = (selector: string) => `:where(${selector})`;
    }
  }
}

export default Selectors;
