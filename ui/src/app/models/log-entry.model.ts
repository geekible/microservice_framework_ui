export interface LogEntry {
    ID: number;
	CreatedAt: Date;
    LogLevel: string;
	Message: string;
	Service: string;
	Source: string;
	User: string;
	StackTrace: string;
}