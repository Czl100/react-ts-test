declare namespace global2 {
  function pdebug(any): void;
  function plog(any): void;
  function pwarn(any): void;
  function perror(any): void;
}

declare function pdebug(): void;
declare function pdebug(args: any): void;
declare function pdebug(a: any, b: any): void;
declare function pdebug(a: any, b: any, c: any): void;
declare function pdebug(a: any, b: any, c: any, d: any): void;

declare function plog(): void;
declare function plog(args: any): void;
declare function plog(a: any, b: any): void;
declare function plog(a: any, b: any, c: any): void;
declare function plog(a: any, b: any, c: any, d: any): void;

declare function pwarn(): void;
declare function pwarn(args: any): void;
declare function pwarn(a: any, b: any): void;
declare function pwarn(a: any, b: any, c: any): void;
declare function pwarn(a: any, b: any, c: any, d: any): void;

declare function perror(): void;
declare function perror(args: any): void;
declare function perror(a: any, b: any): void;
declare function perror(a: any, b: any, c: any): void;
declare function perror(a: any, b: any, c: any, d: any): void;