

// interface.ts
export interface Device {
    // Define your properties here.
    id: string ;
    deviceCode: string;
    deviceName: string;
    ipAddress: string;
    deviceType: string;
    userName: string;
    password: string;
    serviceUse: string[];
    activeStatus?: boolean;
    connectionStatus?: boolean;
}

export interface ServiceType {
    id: string;
    serviceCode: string;
    serviceName: string;
    description: string;
    activeStatus: string;
}

export interface NumberType {
    id: string;
    stt: number;
    customerName: string;
    serviceName: string;
    fromDate: string;
    toDate: string;
    status: string;
    supply: string;
}