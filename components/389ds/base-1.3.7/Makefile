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
# Copyright (c) 2017, cgrzemba@opencsw.org
#

PATH=$(SPRO_VROOT)/bin:$(GNUBIN):$(USRBINDIR)

COMPONENT_NAME=		389-ds-base
COMPONENT_VERSION=	1.3.7.6
COMPONENT_PROJECT_URL=	http://directory.fedoraproject.org
COMPONENT_ARCHIVE_HASH= \
    sha256:7236e71489b832f9e13d2b2f8b5a93060dc0e0ff92fb35a0d39641bae020a769
COMPONENT_ARCHIVE = $(COMPONENT_NAME)-$(COMPONENT_VERSION).tar.bz2
COMPONENT_ARCHIVE_URL=	https://releases.pagure.org/$(COMPONENT_NAME)/$(COMPONENT_ARCHIVE)
COMPONENT_BUGDB=	
COMPONENT_ANITYA_ID=	

TPNO=9999

# csiphash is only 64bit aware!
BUILD_BITS= 64
include ../../../make-rules/shared-macros.mk

include $(WS_MAKE_RULES)/common.mk

# uses  __atomic_add_fetch_8
COMPILER = gcc

CFLAGS.gcc.sparc += -mno-unaligned-doubles

# FLAVOR = DBG
FLAVOR = TST

CONFIGURE_ENV +=	PYTHONPROG=$(PYTHON.$(BITS))

CONFIGURE_OPTIONS += --sysconfdir=/etc
CONFIGURE_OPTIONS += --localstatedir=/var
CONFIGURE_OPTIONS += --with-openldap-inc=$(USRINCDIR)/openldap
CONFIGURE_OPTIONS += --with-openldap-lib=$(USRLIBDIR)/$(MACH64)
CONFIGURE_OPTIONS += --with-openldap-bin=$(USRLIBDIR)/openldap/bin
CONFIGURE_OPTIONS += --with-sasl-inc=$(USRINCDIR)/sasl2 
CONFIGURE_OPTIONS += --with-sasl-lib=$(USRLIBDIR)/sasl2/$(MACH64)
CONFIGURE_OPTIONS += --with-nss-lib=$(USRLIBDIR)/mps/$(MACH64)
CONFIGURE_OPTIONS += --with-nss-inc=$(USRINCDIR)/mps
CONFIGURE_OPTIONS += --with-nspr-lib=$(USRLIBDIR)/mps/$(MACH64)
CONFIGURE_OPTIONS += --with-nspr-inc=$(USRINCDIR)/mps
# to satisfy pkgsend resolve
CONFIGURE_OPTIONS += --with-pythonexec=/usr/bin/python2.7
CONFIGURE_OPTIONS.DBG += --enable-debug
CONFIGURE_OPTIONS.TST += --enable-cmocka
CONFIGURE_OPTIONS += $(CONFIGURE_OPTIONS.$(FLAVOR))

COMPONENT_PRE_CONFIGURE_ACTION = \
	($(CLONEY) $(SOURCE_DIR) $(@D))
COMPONENT_PREP_ACTION = ( \
	cd $(@D); \
		libtoolize --copy --force; \
		aclocal --force; \
		autoheader --force ; \
		automake --add-missing --copy --force-missing; \
		autoconf; \
	)

COMPONENT_POST_INSTALL_ACTION = \
	( ginstall -d $(PROTOSVCMANIFESTDIR)/network ; \
	 svcbundle -o $(PROTOSVCMANIFESTDIR)/network/dirsrv.xml -s service-name=network/ds/dirsrv -s start-method=/usr/bin/start-dirsrv -s stop-method=/usr/bin/stop-dirsrv -s model=daemon -s enabled=false ;\
	 )

TEST_TARGET = $(TEST_64)

REQUIRED_PACKAGES += library/security/openssl
REQUIRED_PACKAGES += $(PERL_PKG)
REQUIRED_PACKAGES += library/icu
REQUIRED_PACKAGES += library/security/nss
REQUIRED_PACKAGES += library/nspr
REQUIRED_PACKAGES += library/svrcore
REQUIRED_PACKAGES += system/management/snmp/net-snmp
REQUIRED_PACKAGES += system/library/security/libsasl2
REQUIRED_PACKAGES += system/core-os
REQUIRED_PACKAGES += library/openldap
REQUIRED_PACKAGES += database/berkeleydb-5
REQUIRED_PACKAGES += service/security/kerberos-5
REQUIRED_PACKAGES += library/pcre
REQUIRED_PACKAGES += library/libevent
REQUIRED_PACKAGES += developer/documentation-tool/doxygen
REQUIRED_PACKAGES += developer/build/pkg-config
