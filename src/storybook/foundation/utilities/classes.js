export const flexClasses = {
  display: [
    '.d-flex',
    '.d-inline-flex',
    '.d-{breakpoint}-flex',
    '.d-{breakpoint}-inline-flex'
  ],
  direction: [
    '.flex-row',
    '.flex-row-reverse',
    '.flex-column',
    '.flex-column-reverse',
    '.flex-{breakpoint}-row',
    '.flex-{breakpoint}-row-reverse',
    '.flex-{breakpoint}-column',
    '.flex-{breakpoint}-column-reverse'
  ],
  justifyContent: [
    '.justify-content-start',
    '.justify-content-end',
    '.justify-content-center',
    '.justify-content-between',
    '.justify-content-around',
    '.justify-content-{breakpoint}-start',
    '.justify-content-{breakpoint}-end',
    '.justify-content-{breakpoint}-center',
    '.justify-content-{breakpoint}-between',
    '.justify-content-{breakpoint}-around'
  ],
  alignItems: [
    '.align-items-start',
    '.align-items-end',
    '.align-items-center',
    '.align-items-baseline',
    '.align-items-stretch',
    '.align-items-{breakpoint}-start',
    '.align-items-{breakpoint}-end',
    '.align-items-{breakpoint}-center',
    '.align-items-{breakpoint}-baseline',
    '.align-items-{breakpoint}-stretch'
  ],
  alignSelf: [
    '.align-self-auto',
    '.align-self-start',
    '.align-self-end',
    '.align-self-center',
    '.align-self-baseline',
    '.align-self-stretch',
    '.align-self-{breakpoint}-auto',
    '.align-self-{breakpoint}-start',
    '.align-self-{breakpoint}-end',
    '.align-self-{breakpoint}-center',
    '.align-self-{breakpoint}-baseline',
    '.align-self-{breakpoint}-stretch'
  ],
  flex: [
    '.flex-fill',
    '.flex-{grow|shrink}-0',
    '.flex-{grow|shrink}-1',
    '.flex-{breakpoint}-fill',
    '.flex-{breakpoint}-{grow|shrink}-0',
    '.flex-{breakpoint}-{grow|shrink}-1'
  ],
  wrap: [
    '.flex-nowrap',
    '.flex-wrap',
    '.flex-wrap-reverse',
    '.flex-{breakpoint}-nowrap',
    '.flex-{breakpoint}-wrap',
    '.flex-{breakpoint}-wrap-reverse'
  ],
  order: ['.order-{0 to $max-order}', '.order-{breakpoint}-{0 to $max-order}'],
  alignContent: [
    '.align-content-start',
    '.align-content-end',
    '.align-content-center',
    '.align-content-between',
    '.align-content-around',
    '.align-content-stretch',
    '.align-content-{breakpoint}-start',
    '.align-content-{breakpoint}-end',
    '.align-content-{breakpoint}-center',
    '.align-content-{breakpoint}-between',
    '.align-content-{breakpoint}-around',
    '.align-content-{breakpoint}-stretch'
  ]
}

export const displayClasses = {
  display: ['.d-{value}', '.d-{breakpoint}-{value}'],
  values: [
    'none',
    'inline',
    'inline-block',
    'block',
    'table',
    'cell',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex'
  ]
}
