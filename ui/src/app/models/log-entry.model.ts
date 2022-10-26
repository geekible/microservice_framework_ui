export interface LogEntry {
    ID: number;
    LogLevel: string;
	Message: string;
	Service: string;
	Source: string;
	User: string;
	StackTrace: string;
}