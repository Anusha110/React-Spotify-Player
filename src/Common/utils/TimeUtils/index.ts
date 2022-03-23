import moment from 'moment'
export const getHours = (seconds: number): number =>
   Math.floor(seconds / (60 * 60))

export const getMinutes = (seconds: number): number =>
   Math.floor((seconds % (60 * 60)) / 60)

export const getSeconds = (seconds: number): number =>
   Math.ceil((seconds % (60 * 60)) % 60)

export const getTimeFormat = (seconds: number) => {
   const hours: number = getHours(seconds)
   const minutes: number = getMinutes(seconds)
   const updatedSeconds: number = getSeconds(seconds)
   let currentHours = ''

   if (hours > 0) {
      currentHours = hours < 10 ? `0${hours} : ` : `${hours} : `
   }
   const currentMinutes: string =
      minutes < 10 ? `0${minutes} : ` : `${minutes} : `
   const currentSeconds =
      updatedSeconds < 10 ? `0${updatedSeconds}` : `${updatedSeconds}`
   return currentHours + currentMinutes + currentSeconds
}

export const getMinuteSecondFormat = (milliseconds: number) => {
   const duration = moment.duration(milliseconds, 'milliseconds')
   const minutes = duration.minutes()
   let seconds: string | number = duration.seconds()
   if (seconds < 10) {
      seconds = `${String(seconds)}0`
   }

   return `${minutes}:${seconds}`
}

export const getDateTimeAgo = (dateTime: string) => {
   const dateTimeAgo = moment(dateTime).fromNow()
   if (dateTimeAgo === 'a month ago') {
      return '1 month ago'
   }
   return dateTimeAgo
}
