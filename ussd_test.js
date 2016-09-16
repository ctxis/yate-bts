/**
 * This file is part of the Yate-BTS Project http://www.yatebts.com
 *
 * Copyright (C) 2015 Null Team
 *
 * This software is distributed under multiple licenses;
 * see the COPYING file in the main directory for licensing
 * information for this specific distribution.
 *
 * This use of this software may be subject to additional restrictions.
 * See the LEGAL file in the main directory for details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */

/*
 * Mobile Terminated USSD by Context Information Security Ltd
 * alex.farrant@contextis.co.uk
 * control ussd_test callto=234159329821234 tid=01 type=0 data=deadbeef
 */

function onControl(msg)
{
	if (!msg.callto && !msg.data) {
		msg.retValue("Missing callto or data. The USSD will not be sent.");
		msg["operation-status"] = false;
		return true;
	}

	var m = new Message("msg.execute");
	m["operation_type"]="ussr"; // USSD REQUEST
	m.id = "12345"; // N/A for USSD
	m.callto = "ybts/IMSI"+msg.callto; // IMSI
	m.text = msg.data; // PAYLOAD
	m["data"] = msg.data; // PAYLOAD
	m["tid"] = msg.tid; // Transaction ID (0-127)
	m["ussd-type"] = msg.type; // 0 = REGISTER (DEFAULT), 1 = FACILITY, 2 = RELEASE
	msg["operation-status"] = m.dispatch();
	return true;
}

Engine.debugName("ussd_test");
Message.install(onControl,"chan.control",80,"component","ussd_test");

