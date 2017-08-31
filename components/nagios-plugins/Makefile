#
# CDDL HEADER START
#
# The contents of this file are subject to the terms of the
# Common Development and Distribution License (the "License").
# You may not use this file except in compliance with the License.
#
# You can obtain a copy of the license at usr/src/OPENSOLARIS.LICENSE
# or http://www.opensolaris.org/os/licensing.
# See the License for the specific language governing permissions
# and limitations under the License.
#
# When distributing Covered Code, include this CDDL HEADER in each
# file and include the License file at usr/src/OPENSOLARIS.LICENSE.
# If applicable, add the following below this CDDL HEADER, with the
# fields enclosed by brackets "[]" replaced with your own identifying
# information: Portions Copyright [yyyy] [name of copyright owner]
#
# CDDL HEADER END
#

#
# Copyright (c) 2011, 2016, Oracle and/or its affiliates. All rights reserved.
#
# net-snmp has a "special" build where only 32-bit items are installed into
# proto area; so prefer 32-bit to preserve existing sourcing.

BUILD_BITS= 64
include ../../make-rules/shared-macros.mk

PATH=$(SPRO_VROOT)/bin:$(GNUBIN):$(USRBINDIR)

COMPONENT_NAME=		nagios-plugins
COMPONENT_VERSION=	2.1.1
COMPONENT_PROJECT_URL= https://nagios-plugins.org/
COMPONENT_ARCHIVE_HASH= \
    sha256:c7daf95ecbf6909724258e55a319057b78dcca23b2a6cc0a640b90c90d4feae3
# COMPONENT_ARCHIVE_URL= http://assets.nagios.com/downloads/nagiosplugins/$(COMPONENT_NAME)-$(COMPONENT_VERSION).tar.gz
COMPONENT_ARCHIVE_URL= http://www.nagios-plugins.org/download/$(COMPONENT_NAME)-$(COMPONENT_VERSION).tar.gz

IPS_PKG_NAME = application/management/$(COMPONENT_NAME)

TPNO=			99999

include $(WS_MAKE_RULES)/common.mk

studio_C99MODE= $(studio_C99_ENABLE)

# CONFIGURE_OPTIONS += --enable-largefile

COPYRIGHT_FILE = COPYING 
REQUIRED_PACKAGES += library/security/openssl
REQUIRED_PACKAGES += system/library/math
