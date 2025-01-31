export interface Friend {
    id: string
    name: string
    avatar: string
    amount?: number
  }
  
  export interface BillItem {
    id: string
    name: string
    price: number
    quantity: number
    participants: Friend[]
  }
  
  export interface Bill {
    id: string
    storeName: string
    date: string
    items: BillItem[]
    total: number
    tax: number
  }
  
  