import { trigger, transition, query, style, stagger, animate, group, animateChild } from "@angular/animations";

export const routeToOrders = trigger("routeToOrders", [
  transition('* => orders', [
    query(':enter', [
      style({
        transform: 'translateY(100%)'
      })
    ], {optional: true}),

    group([
      query(':enter', [
        animate('600ms ease', style({
          transform: 'translateY(0%)'
        }))
      ], {optional: true})
    ]),
    query('@backArrow', animateChild(), {optional: true}),
    query('@card', animateChild(), {optional: true}),
    query('@total', animateChild(), {optional: true}),
    query('@confirmButton', animateChild(), {optional: true})
  ])
]);

export const total = trigger('total', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-20%)'
    }),
    animate('500ms 100ms ease')
  ])
]);

export const confirmButton = trigger("confirmButton", [
  transition(":enter", [
    style({
      opacity: 0,
      transform: 'translateY(50%)'
    }),
    animate("350ms ease"),
  ]),
]);



export const sending = trigger('sending', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(50%)'
    }),
    animate('800ms 100ms ease')
  ]),
  transition(':leave', [
    style({
      opacity: 0
    }),
    animate('300ms ease', style({
      opacity: 0
    }))
  ])
]);

export const confirmation = trigger('confirmation', [
  transition(':enter', [
    group([
      query(':self', [
        style({
          opacity: 0
        }),

        animate('1000ms 200ms ease')
          
      ], { optional: true }),
      query('img', [
        style({
          opacity: 0,
          transform: 'scale(0)'
        }),
        animate("500ms 300ms ease")
      ], {optional: true})
    ])
  ])
]);

export const routeAnimation = trigger("routeAnimation", [
  transition('menu => landing', [

    query(':enter', [
      style({
        position: 'absolute',
        width: '*',
        height: '*',
        top: '0%',
        left: '-100%',
        opacity: 0
       })
    ], { optional: true }),
    query(':leave', [
      style({
        position: 'absolute',
        width: '*',
        height: '*',
        top: '0%',
        left: '0%',
        opacity: 1
       })   
    ], { optional: true }),
    group([
      query(':enter', [
        animate('600ms ease', style({
          left: '0%',
          opacity: 1
        }))
      ], {optional: true}),
      query(':leave', [
        animate('600ms ease', style({
          left: '100%',
          opacity: 0
        }))
      ], {optional: true}),
      query('@landing', animateChild(), {optional: true}),
    ])
    
    

         
  ]),
  transition('landing => menu', [
    query(':enter', [
      style({
        position: 'absolute',
        width: '*',
        height: '*',
        top: '0%',
        left: '100%',
       })
    ], { optional: true }),
    query(':leave', [
      style({
        position: 'absolute',
        width: '*',
        height: '80%',
        top: '0%',
        left: '0%'
         
       })   
    ], {optional: true}),

    group([
      query(':enter', [
        animate('600ms ease', style({
          left: '0%'
        }))
      ], { optional: true }),
      
      query('@card', animateChild(), {optional: true}),
      query(':leave', [
        animate('600ms ease', style({
          left: '-100%'
        }))
      ], {optional: true})
    ])
  ]),
  
  
]);

export const card = trigger("card", [
  transition(
    ":enter",
    [
      group([
        query("@image", animateChild(), { optional: true }),

        query("app-card, app-detail", [
          style({ transform: "{{translate}}", opacity: 0 }),
          stagger("20ms", [
            animate(
              "{{duration}} {{delay}} ease",
              style({
                transform: "translateY(0%)",
                opacity: 1,
              })
            ),
          ]),
        ], {optional: true}),
        
      ]),
    ],
    { params: { translate: "translate(0%)", duration: "400ms", delay: "200ms" } }
  ),
]);



export const landing = trigger("landing", [
  transition(":enter", [
    group([
      query("@header", animateChild(), { optional: true }),
      query(
        "image, app-button",
        [
          style({
            opacity: 0,
            transform: "translateY(20%)",
          }),
          stagger("50ms", [animate("500ms 200ms ease")]),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);

export const header = trigger('header', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(1.1)'
    }),
    animate('1000ms 500ms ease')
  ])
]);

export const orders = trigger("orders", [
  transition(":enter", [
    style({
      opacity: 0,
      transform: "translateY(50%)",
    }),
    animate("400ms 100ms ease"),
  ]),

  transition(":leave", [
    animate(
      "400ms ease",
      style({
        transform: "translateY(50%)",
        opacity: 0,
      })
    ),
  ]),
]);


export const orderCount = trigger("orderCount", [
  transition(":increment", [
    style({
      opacity: 0,
      transform: "scale(1.5)",
    }),
    animate("500ms ease"),
  ]),
  transition(":decrement", [
    animate(
      "200ms ease",
      style({
        transform: "scale(1.3)",
      })
    ),
  ]),
]);


export const ordersCard = trigger('ordersCard', [
  transition(':leave', [
    animate('300ms ease', style({
      opacity: 0,
      transform: 'translateY(100%)'
    })),
  ])
])

export const backArrow = trigger('backArrow', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(50%)'
    }),

    animate('500ms ease')
  ])
]);


export const image = trigger('image', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('500ms ease')
  ])
])


