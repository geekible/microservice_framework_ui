export interface NotificationRecord {
    ID: number;
	CreatedAt: Date;
    NotificationType: number;
	ToAddress: string;
	CcAddress: string;
	FromAddress: string;
	Subject: string;
	Body: string;
	BodyPlainText: string;
	IsSent: boolean;
	ErrorMessage: string;
}