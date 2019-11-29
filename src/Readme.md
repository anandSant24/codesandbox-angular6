Angular life Cycle hooks

1. Creates the Component
2. Renders the Component
3. Create and Renders the Child Component
4. Checks with Component data cound property and changes
5. Finally destroys the component before removing it from the DOM

we can tap into this and react to the life Cycle event using hooks
ngOnChanges
ngOnInit
ngCheck
ngAfterContentInit
ngAfterContnetChecked
ngAfterViewInit
ngAfterViewChecked
ngOnDestroy
most commonly used hooks

# ngOnChanges: executes every time value of the input changes, it is called beore ngOnInit

# ngOnInit: the hook method receives a Simple object containing current and previous property values
