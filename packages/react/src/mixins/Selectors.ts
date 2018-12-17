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
  // tslint:disable-next-line:no-shadowed-variable
  export const Selector = (sel: string) => sel;

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
      export namespace Moz {
        export const Dir = ":-moz-dir";
        export const AnyLink = ":-moz-any-link";
        export const FullScreen = ":-moz-full-screen";
        export const OnlyWhitespace = ":-moz-only-whitespace";
        export const Placeholder = ":-moz-placeholder";
        export const ReadOnly = ":-moz-read-only";
        export const ReadWrite = ":-moz-read-write";

        export const Placeholder2 = "::-moz-placeholder";
        export const ProgressBar = "::-moz-progress-bar";
        export const RangeProgress = "::-moz-range-progress";
        export const RangeThumb = "::-moz-range-thumb";
        export const RangeTrack = "::-moz-range-track";
        export const Selection = "::-moz-selection";
      }

      export namespace Webkit {
        export const AnyLink = ":-webkit-any-link";
        export const FullScreen = ":-webkit-full-screen";

        export const Backdrop = "::-webkit-backdrop";
        export const InputPlaceholder = "::-webkit-input-placeholder";
        export const ProgressBar = "::-webkit-progress-bar";
        export const ProgressInnerValue = "::-webkit-progress-inner-value";
        export const ProgressValue = "::-webkit-progress-value";
        export const SliderRunnableTrack = "::-webkit-slider-runnable-track";
        export const SliderThumb = "::-webkit-slider-thumb";
      }

      export namespace MS {
        export const Fullscreen = ":-ms-fullscreen";
        export const InputPlaceholder = ":-ms-input-placeholder";

        export const Backdrop = "::-ms-backdrop";
        export const Browse = "::-ms-browse";
        export const Check = "::-ms-check";
        export const Clear = "::-ms-clear";
        export const Fill = "::-ms-fill";
        export const FillLower = "::-ms-fill-lower";
        export const FillUpper = "::-ms-fill-upper";
        export const Reveal = "::-ms-reveal";
        export const Thumb = "::-ms-thumb";
        export const TicksAfter = "::-ms-ticks-after";
        export const TicksBefore = "::-ms-ticks-before";
        export const Tooltip = "::-ms-tooltip";
        export const Track = "::-ms-track";
        export const Value = "::-ms-value";
      }
    }

    // Double colon
    export const After2 = "::after";
    export const Backdrop = "::backdrop";
    export const Before2 = "::before";
    export const Colon2 = "::cue";
    export const FirstLetter2 = "::first-letter";
    export const FirstLine2 = "::first-line";
    export const GrammarError = "::grammar-error";
    export const Placeholder = "::placeholder";
    export const Selection = "::selection";
    export const Slotted2 = "::slotted";
    export const SpellingError = "::spelling-error";

    // Single colon
    export const Active = ":active";
    export const After = ":after";
    export const AnyLink = ":any-link";
    export const Before = ":before";
    export const Blank = ":blank";
    export const Checked = ":checked";
    export const Default = ":default";
    export const Defined = ":defined";
    export const Dir = ":dir";
    export const Disabled = ":disabled";
    export const Empty = ":empty";
    export const Enabled = ":enabled";
    export const First = ":first";
    export const FirstChild = ":first-child";
    export const FirstLetter = ":first-letter";
    export const FirstLine = ":first-line";
    export const FirstOfType = ":first-of-type";
    export const Focus = ":focus";
    export const FocusWithin = ":focus-within";
    export const Fullscreen = ":fullscreen";
    export const Has = ":has";
    export const Host = ":host";
    export const HostContext = ":host-context";
    export const Hover = ":hover";
    export const InRange = ":in-range";
    export const Indeterminate = ":indeterminate";
    export const Invalid = ":invalid";
    export const Is = ":is";
    export const Lang = ":lang";
    export const LastChild = ":last-child";
    export const LastOfType = ":last-of-type";
    export const Left = ":left";
    export const Link = ":link";
    export const Not = ":not";
    export const NthChild = ":nth-child";
    export const NthLastChild = ":nth-last-child";
    export const NthLastOfType = ":nth-last-of-type";
    export const NthOfType = ":nth-of-type";
    export const OnlyChild = ":only-child";
    export const OnlyOfType = ":only-of-type";
    export const Optional = ":optional";
    export const OutOfRange = ":out-of-range";
    export const PlaceholderShown = ":placeholder-shown";
    export const ReadOnly = ":read-only";
    export const ReadWrite = ":read-write";
    export const Required = ":required";
    export const Right = ":right";
    export const Root = ":root";
    export const Scope = ":scope";
    export const Target = ":target";
    export const Valid = ":valid";
    export const Visited = ":visited";
    export const Where = ":where";
  }
}

export default Selectors;
