import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = "yellow";
  }

  // @HostListener("mouseenter") onMouseEnter() {
  //   this.highlight("yellow");
  // }

  // @HostListener("mouseleave") onMouseLeave() {
  //   this.highlight(null);
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}
// import { Directive, ElementRef, HostListener } from "@angular/core";

// @Directive({
//   selector: "[appHighlights]"
// })
// export class BuildAttrDirective {
//   constructor(el: ElementRef) {}

//   @HostListener("mouseenter") onMouseEnter() {
//     this.highlight("yello");
//   }
//   @HostListener("mouseleave") onMouseLeave() {
//     this.highlight(null);
//   }
//   private highlight(color: string) {
//     this.el.nativeElement.style.backgroundColor = color;
//   }
// }
