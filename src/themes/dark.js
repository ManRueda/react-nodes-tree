import arrow from '../assets/arrow.svg'

export const backgroundColor = 'rgb(36, 36, 36)'

export const font = {
  size: '20px',
  color: 'rgb(93, 176, 215)',
  family: 'Consolas, Lucida Console, Courier New, monospace'
}

export const highlight = {
  hover: {
    color: 'rgb(54, 54, 54)'
  },
  selected: {
    color: 'rgb(199, 134, 38)'
  },
  expand: {
    icon: `url(${arrow})`,
    color: 'rgb(145, 145, 145)'
  }
}

export const attr = {
  name: {
    color: 'rgb(155, 187, 220)'
  },
  value: {
    color: 'rgb(242, 151, 102)'
  }
}

export const levelMargin = '1' // in em
